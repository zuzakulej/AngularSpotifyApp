import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  // styleUrls: ['./item-list.component.css']
  encapsulation: ViewEncapsulation.Emulated,
  styles: [` 
    :host{
      border: 1px solid black;
      display: block;
    }
    :host(.colored) p{
      color: hotpink;
    }
  `]
})
export class ItemListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
