import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo-service.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.scss']
})
export class ThumbnailsComponent implements OnInit {

  photos: Photo[] = [];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  pageIndex = 1;

  constructor( private photoService: PhotoService, private router: Router) {}

  ngOnInit() {
    this.getPhotos();
    this.getPhotosCount();
  }

  getPhotos() {
    this.photoService.getPhotos( this.pageSize, this.pageIndex ).subscribe(
      (photos: Photo[] ) => {
        this.photos.forEach( (photo: Photo) => {
          photo.show = false;
        });
        this.photos = photos; },
      (error) => console.log(error));
  }
  getPhotosCount() {
    this.photoService.getAllPhotos().subscribe(
      (photos: Photo[] ) => this.length = photos.length,
      (error) => console.log(error));
  }
  photoClicked(id: number) {
    this.router.navigate(['/photo', id]);
  }

  pageInfoChanged( event: any ) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex + 1;
    this.getPhotos();
   }

}
