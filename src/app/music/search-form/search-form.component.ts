import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  
  queryForm:FormGroup
  
  constructor() { 
    this.queryForm = new FormGroup({
      'query': new FormControl('batman'),
    })
    console.log(this.queryForm)
  }

  search(query){

  }

  ngOnInit() {
  }

}
