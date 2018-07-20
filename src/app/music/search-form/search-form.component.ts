import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, ValidatorFn, AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { query } from '@angular/core/src/render3/query';
import { map, distinctUntilChanged, filter, debounceTime, withLatestFrom } from '../../../../node_modules/rxjs/operators';
import { Observable, Observer } from '../../../../node_modules/rxjs';
import { callbackify } from 'util';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  
  @Output()
  queryChange = new EventEmitter<string>() 

  queryForm:FormGroup
  
  constructor() { 

    const censor:ValidatorFn = (control: AbstractControl) : ValidationErrors | null => {
      const hasError = control.value.includes('batman')
      return hasError? { 'censor' : true } : null
    }

    const asyncCensor = (badword): AsyncValidatorFn => (control: AbstractControl) => {
      //this.http.get(...).pipe(map(response = > validationErrors))

      return Observable.create((observer:Observer<ValidationErrors | null>) => {
        const handler = setTimeout(() => {
         const hasError = control.value.includes(badword)
         observer.next(hasError? { 'censor' : badword } : null)
         observer.complete()
        }, 1000)

        //when user unsubscribes - clear clock:
        return () => {clearTimeout(handler)}
      })
    }

    this.queryForm = new FormGroup({
      'query': new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        // censor
      ], [
        asyncCensor('batman')
      ]),
    })

    const status$ = this.queryForm.get('query').statusChanges
    const query$ = this.queryForm.get('query').valueChanges.pipe(
      map(query => query.trim()),
      distinctUntilChanged(),
      debounceTime(400),
      filter(query => query.length >= 3)
    )
    const valid$ = status$.pipe(
      filter(status => status =="VALID")
    )
     
    valid$.pipe(
      withLatestFrom(query$, (valid, query) => query)
    )
    .subscribe(query => {
      this.search(query)
    })

    //http://rxmarbles.com/#distinctUntilChanged
    // this.queryForm.get('query').valueChanges
    // .subscribe(query => {
    //   this.search(query)
    // })
    console.log(this.queryForm)
  }

  search(query){
    this.queryChange.emit(query)
    console.log(query)
  }

  ngOnInit() {
  }

}
