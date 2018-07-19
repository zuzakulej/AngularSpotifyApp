import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Playlist } from '../../model/playlist';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  // styleUrls: ['./item-list.component.css']
  encapsulation: ViewEncapsulation.Emulated,
  styles: [` 
    // :host{
    //   border: 1px solid black;
    //   display: block;
    // }
    // :host(.colored) p{
    //   color: hotpink;
    // }
  `]
})
export class ItemListComponent implements OnInit {

@Input('items')
playlists: Playlist[] = []

@Input()
selected: Playlist

@Output()
selectedChange = new EventEmitter<Playlist>()

select(playlist:Playlist){
  this.selected = playlist
  this.selectedChange.emit(playlist)
}

trackFn(i, item) {
  return item.id;
}

  constructor() { }

  ngOnInit() {
  }

}
