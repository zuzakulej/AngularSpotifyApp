import { Component, OnInit, Input } from '@angular/core';
import { Album } from 'src/app/model/album';

@Component({
  selector: 'app-albums-grid',
  templateUrl: './albums-grid.component.html',
  styleUrls: ['./albums-grid.component.css']
})
export class AlbumsGridComponent implements OnInit {

  @Input()
  albums:Album[]
   
  constructor() { }

  ngOnInit() {
  }

}
