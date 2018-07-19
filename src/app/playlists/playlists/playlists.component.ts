import { Component, OnInit } from '@angular/core';
import { Playlist } from '../../model/playlist';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

savePlaylist(playlist){
  const index = this.playlists.findIndex(p=>p.id == playlist.id)
  if(index !== null){
    this.playlists.splice(index,1,playlist)
  }
}

  playlists: Playlist[] = [
    {
      id: 111,
      name: 'Hit1!',
      favourite: true,
      color: '#ff0000'
    },
    {
      id: 112,
      name: 'Hit2!',
      favourite: false,
      color: '#0ff0f0'
    },
    {
      id: 113,
      name: 'Hit3!',
      favourite: true,
      color: '#91d314'
    },
  ]

  selected = this.playlists[0]

constructor() { }

ngOnInit() {
}

}
