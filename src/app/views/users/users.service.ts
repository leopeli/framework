import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelUsers } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = "https://jsonplaceholder.typicode.com/users";

constructor(private _http: HttpClient) { }

getUsers():Observable<ModelUsers[]> {
  return this._http.get<ModelUsers[]>(this.baseUrl);
}

}
