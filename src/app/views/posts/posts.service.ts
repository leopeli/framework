import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModelPost } from './post.model';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }


  getPosts(): Observable<ModelPost[]> {
    return this.http.get<ModelPost[]>(this.baseUrl)
  }
}
