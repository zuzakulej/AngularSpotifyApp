import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicSearchComponent } from './music-search/music-search.component';
import { AlbumsGridComponent } from './albums-grid/albums-grid.component';
import { AlbumItemComponent } from './album-item/album-item.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { environment } from '../../environments/environment.prod';
import { MusicService } from './music.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [
    MusicSearchComponent,
    AlbumsGridComponent, 
    AlbumItemComponent, 
    SearchFormComponent
  ],
  exports: [MusicSearchComponent],
  providers: [
    {
      provide: 'SEARCH_URL',
      useValue: 'https://api.spotify.com/v1/search'
      // useValue: environment.search_url
    }
  ]
})
export class MusicModule { }
