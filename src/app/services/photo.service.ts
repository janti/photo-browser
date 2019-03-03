import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Photo } from '../models/photo';
import { Album } from '../models/album';

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
  getPhotosFromAlbum( photoCount: number, pageIndex: number, albumId: string ) {
    return this.http.get<Photo[]>(BASE_URL + '/photos?_limit=' + photoCount + '&_page=' + pageIndex + '&albumId=' + albumId);
  }
  getPhoto( id: string) {
    return this.http.get<Photo>(BASE_URL + '/photos/' + id);
  }
  getAllPhotos() {
    return this.http.get<Photo[]>(BASE_URL + '/photos');
  }
  getAllAlbumPhotos(albumId: string) {
    return this.http.get<Photo[]>(BASE_URL + '/photos?albumId=' + albumId);
  }
  getAlbums() {
    return this.http.get<Album[]>(BASE_URL + '/albums');
  }
}
