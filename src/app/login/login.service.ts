import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }
  login(username) {
    return this.http.get(`https://swapi.co/api/people/?search=${username}`);
  }
}