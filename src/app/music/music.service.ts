import { Injectable, Inject, InjectionToken } from '@angular/core';
import { Album } from 'src/app/model/album';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { SecurityService } from '../security/security.service';
import { throwError, of, Subject } from '../../../node_modules/rxjs';
import { catchError, map } from '../../../node_modules/rxjs/operators';

export const SEARCH_URL = new InjectionToken('URL for albums search API')

interface AlbumsResponse{
  albums:{
    items:Album[]
  }
}

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  
  constructor(@Inject('SEARCH_URL') private api_url,
  private http: HttpClient,
  private security: SecurityService
  ) {
  this.queries.subscribe(query => {
    this.http.get<AlbumsResponse>(this.api_url, {
      headers: {
        Authorization: 'Bearer ' + this.security.getToken()
      },
      params: {
        type: 'album',
        q: query
      }
    }).pipe(
      map((response)=>{
        return response.albums.items
      }),
      catchError( (err) => {
        if( err instanceof HttpErrorResponse){
          if(err.status == 401){
            this.security.authorize()
            return throwError(new Error('Access Denied'))
          }
        }
        return of([])
      })
    ).subscribe(albums => {
      this.albums.next(albums)
    })
  })
 }

queries = new Subject<string>()
albums = new Subject<Album[]>()

  search(query) {
    this.queries.next(query)
  }

  getAlbums(query = "batman") {
    return this.albums
  }

  // albums:Album[] = [
  //   {
  //     id:"a12",
  //     name: "Ala",
  //     artists: [],
  //     images: [
  //       {
  //         url:"http://placekitten.com/300/300",
  //         height:300,
  //         width:300
  //       }
  //     ]
  //   },
  //   {
  //     id:"b14",
  //     name: "Basia",
  //     artists: [],
  //     images: [
  //       {
  //         url:"http://placekitten.com/300/300",
  //         height:300,
  //         width:300
  //       }
  //     ]
  //   }
  // ]

}