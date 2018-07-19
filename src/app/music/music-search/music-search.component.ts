import { Component, OnInit, Input, Inject } from '@angular/core';
import { MusicService } from '../music.service';
import { Album } from 'src/app/model/album';

@Component({
  selector: 'app-music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.css']
})
export class MusicSearchComponent implements OnInit {

  constructor(@Inject(MusicService) private musicService:MusicService) {
    this.albums = musicService.getAlbums()
   }

  albums:Album[]

  ngOnInit() {
  }

}
