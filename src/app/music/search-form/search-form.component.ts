import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { query } from '@angular/core/src/render3/query';
import { map, distinctUntilChanged, filter, debounceTime } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  
  queryForm:FormGroup
  
  constructor() { 
    this.queryForm = new FormGroup({
      'query': new FormControl('batman')
    })
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
    console.log(query)
  }

  ngOnInit() {
  }

}
