import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  // styleUrls: ['./item-list.component.css']
  styles: [` 
    p{
      color: hotpink;
    }
  `]
})
export class ItemListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
