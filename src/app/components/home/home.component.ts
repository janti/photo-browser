import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo-service.service';
import { PageEvent } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  photos: Photo[] = [];
  length: number;
  pageSize: number;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageIndex: number;
  albumId: any;

  constructor(private photoService: PhotoService, private router: Router) { 
    this.length = 100;
    this.pageSize = 10;
    this.pageIndex = 1;
  }

  ngOnInit() {
    this.getPhotos();
    this.getPhotosCount();
  }
  getPhotos() {
    this.photoService.getPhotos( this.pageSize, this.pageIndex ). subscribe(
      (photos: Photo[] ) => {
        this.photos = photos; },
      (error) => console.log(error));
  }
  getPhotosCount() {
    this.photoService.getAllPhotos().subscribe(
      (photos: Photo[] ) => this.length = photos.length,
      (error) => console.log(error));
  }
  photoClicked(id: any) {
    this.router.navigate(['home/photo', id]);
  }
  pageInfoChanged(event: any) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex + 1;
    this.getPhotos();
  }

}
