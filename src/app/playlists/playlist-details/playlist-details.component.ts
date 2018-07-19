import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Playlist } from '../../model/playlist';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.css']
})
export class PlaylistDetailsComponent implements OnInit {

@Input()
playlist:Playlist

  constructor() { }

  ngOnInit() {
  }

  mode = 'show'

  edit(){
    this.mode = 'edit'
  }
  cancel(){
    this.mode = 'show'
  }

  @Output("save")
  saveEmitter = new EventEmitter()

  save(formRef){
    const playlist = {
      ...this.playlist,
      ...formRef.value
    }
    this.saveEmitter.emit(playlist)
  }

}
