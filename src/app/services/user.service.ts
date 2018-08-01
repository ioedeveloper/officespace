import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NewUser } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url = '';
  constructor(private http: HttpClient) { }

  save(user: NewUser): Observable<Object> {
    this._url = 'http://localhost:8001/api/user/staffSignUp';
    return(this.http.post(this._url, user));
  }
}
