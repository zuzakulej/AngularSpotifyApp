import { Component, OnInit, Input, Inject } from '@angular/core';
import { MusicService } from '../music.service';
import { Album } from 'src/app/model/album';

@Component({
  selector: 'app-music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.css']
})
// export class MusicSearchComponent implements OnInit {

//   constructor(@Inject(MusicService) private musicService:MusicService) {
//     musicService.getAlbums().subscribe(response => {
//       this.albums = response.albums.items
//       console.log(response)
//     })
//    }

//   albums:Album[]

//   ngOnInit() {
//   }

// }
export class MusicSearchComponent implements OnInit {

  albums: Album[]
  error: string

  constructor(private musicService: MusicService) {
    this.search('batman')
  }

  search(query){
    this.musicService.getAlbums(query)
      .subscribe(albums => {
        this.albums = albums
      }, err => {
        this.error = err.message
      })
  }

  ngOnInit() {
  }

}
