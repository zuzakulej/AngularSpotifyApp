import { Component, OnInit } from '@angular/core';
import { Playlist } from '../../model/playlist';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.css']
})
export class PlaylistDetailsComponent implements OnInit {

playlist:Playlist = {
  id: 111,
  name: 'Hit!',
  favourite: true,
  color: '#ff0000'
}

  constructor() { }

  ngOnInit() {
  }

}
