import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistsComponent } from './playlists/playlists/playlists.component';
import { MusicSearchComponent } from './music/music-search/music-search.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'playlists', 
    pathMatch: 'full'
  },
  {
    path:'music',
    component: MusicSearchComponent
  },
  {
    path:'playlists',
    component: PlaylistsComponent
  },
  {
    path:'playlists/:id',
    component: PlaylistsComponent
  },
  {
    path: '**',
    redirectTo: 'music',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{
      enableTracing: true,
      useHash: true
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
