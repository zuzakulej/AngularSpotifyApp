import { Component, OnInit } from '@angular/core';
import { Playlist } from '../../model/playlist';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

select(playlist) {
  this.router.navigate(['/playlists', playlist.id],{
    queryParams:{placki:'YES'}
  })
}

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

constructor(
  private route: ActivatedRoute, 
  private router: Router) {
  
  const id = parseInt(route.snapshot.paramMap.get('id'))
  //TODO fixing playlist  

  const playlist = this.playlists.find(p => p.id == id)
  if (playlist) {
    this.selected = playlist
  } else {
    this.selected = this.playlists[0]
  } 
}

ngOnInit() {
}

}
