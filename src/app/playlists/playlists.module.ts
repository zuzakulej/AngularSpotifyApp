import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistsComponent } from './playlists/playlists.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ 
    PlaylistsComponent, 
    ItemListComponent, 
    ListItemComponent, 
    PlaylistDetailsComponent
  ],
  exports:[
    PlaylistsComponent
  ]
})
export class PlaylistsModule { }
