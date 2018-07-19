import { Injectable, Inject, InjectionToken } from '@angular/core';
import { Album } from 'src/app/model/album';
import { HttpClient } from '@angular/common/http'
import { SecurityService } from '../security/security.service';

export const SEARCH_URL = new InjectionToken('URL for albums search API')

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  
  constructor
  (@Inject('SEARCH_URL') private api_url,
  private http: HttpClient,
  private security: SecurityService
) { }

  getAlbums(query = "batman") {
    this.http.get(this.api_url, {
      headers: {
        Authorization: 'Bearer ' + this.security.getToken()
      },
      params:{
        type: 'album',
        q: query,
      }
    }).subscribe(response => {
      console.log(response)
    })

    return this.albums
  }

  albums:Album[] = [
    {
      id:"a12",
      name: "Ala",
      artists: [],
      images: [
        {
          url:"http://placekitten.com/300/300",
          height:300,
          width:300
        }
      ]
    },
    {
      id:"b14",
      name: "Basia",
      artists: [],
      images: [
        {
          url:"http://placekitten.com/300/300",
          height:300,
          width:300
        }
      ]
    }
  ]

  
}
