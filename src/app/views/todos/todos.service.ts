import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModelTodos } from './todos.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  baseUrl = "https://jsonplaceholder.typicode.com/todos";

  constructor(private _http: HttpClient) { }

  getTodos(): Observable<ModelTodos[]> {
    return this._http.get<ModelTodos[]>(this.baseUrl);
  }
}
