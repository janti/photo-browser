import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const BASE_URL: string = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(userId: string) {
    return this.http.get<User>(BASE_URL + '/user/' + userId);
  }
}
