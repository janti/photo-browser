import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const BASE_URL: string = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  photos: Photo[] = [];

  constructor(private http: HttpClient) { }

  getPhotos( photoCount: number, pageIndex: number) {
    return this.http.get<Photo[]>(BASE_URL + '/photos?_limit=' + photoCount + '&_page=' + pageIndex );
  }
  getPhoto( id: string) {
    return this.http.get<Photo>(BASE_URL + '/photos/' + id);
  }
  getAllPhotos() {
    return this.http.get<Photo[]>(BASE_URL + '/photos');
  }
}
