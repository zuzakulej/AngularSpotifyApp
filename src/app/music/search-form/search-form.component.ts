import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { query } from '@angular/core/src/render3/query';
import { map, distinctUntilChanged, filter, debounceTime } from '../../../../node_modules/rxjs/operators';

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

    const censor:ValidatorFn = (control:AbstractControl):ValidationErrors | null => {
      const hasError = control.value.includes('batman')
      return hasError? { 'censor' : true } : null
    }

    this.queryForm = new FormGroup({
      'query': new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        censor
      ])
    })
    //http://rxmarbles.com/#distinctUntilChanged
    this.queryForm.get('query').valueChanges.pipe(
      map(query => query.trim()),
      distinctUntilChanged(),
      debounceTime(400),
      filter(query => query.length >= 3)
    )
    .subscribe(query => {
      this.search(query)
    })
    console.log(this.queryForm)
  }

  search(query){
    this.queryChange.emit(query)
    console.log(query)
  }

  ngOnInit() {
  }

}
