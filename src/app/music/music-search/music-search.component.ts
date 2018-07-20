import { Component, OnInit, Input, Inject } from '@angular/core';
import { MusicService } from '../music.service';
import { Album } from 'src/app/model/album';
import { query } from '../../../../node_modules/@angular/core/src/render3/query';
import { Observable } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.css']
})

export class MusicSearchComponent implements OnInit {

  albums: Observable<Album[]>
  error: string

  constructor(private musicService: MusicService) {
    // this.search('batman')
    this.albums = this.musicService.getAlbums()
  }

  ngOnInit() {
    // this.musicService.getAlbums()
    // .subscribe(albums => {
    //   this.albums = albums
    // }, err => {
    //   this.error = err.message
    // })
  }

  search(query){
    this.musicService.search(query)
  }

}
