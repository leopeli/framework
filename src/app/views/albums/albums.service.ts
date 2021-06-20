import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelAlbums } from './albums.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  baseUrl= "https://jsonplaceholder.typicode.com/albums";

  constructor(private _http: HttpClient) { }

  getAlbums(): Observable<ModelAlbums[]> {
    return this._http.get<ModelAlbums[]>(this.baseUrl)
  }
}
