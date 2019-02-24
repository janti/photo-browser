import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  photos: Photo[] = [];
  constructor(private http: HttpClient) { }

  getPhotos() {
    return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos?_limit=100');
  }
}
