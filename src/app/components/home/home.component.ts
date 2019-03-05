import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { Router } from '@angular/router';
import { Photo } from 'src/app/models/photo';
import { Subscription } from 'rxjs';

const INITIAL_LENGTH = 100;
const INITIAL_PAGE_SIZE = 10;
const STARTING_INDEX = 1;
const PHOTO_URL = 'home/photo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  photos: Photo[] = [];
  length: number;
  pageSize: number;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageIndex: number;
  albumId: any;
  allPhotosSubscription: Subscription;
  photosSubscription: Subscription;

  constructor(private photoService: PhotoService, private router: Router) {
    this.length = INITIAL_LENGTH;
    this.pageSize = INITIAL_PAGE_SIZE;
    this.pageIndex = STARTING_INDEX;
  }

  ngOnInit() {
    this.initializePhotos();
    this.initializePhotosCount();
  }

  ngOnDestroy() {
    if ( this.photosSubscription) {
      this.photosSubscription.unsubscribe();
    }
    if ( this.allPhotosSubscription ) {
      this.allPhotosSubscription.unsubscribe();
    }
  }

  initializePhotos() {
    this.photosSubscription = this.photoService.getPhotos( this.pageSize, this.pageIndex ).subscribe(
      (photos: Photo[] ) => {
        this.photos = photos; },
      (error: any) => console.log(error));
  }

  initializePhotosCount() {
    this.allPhotosSubscription = this.photoService.getAllPhotos().subscribe(
      (photos: Photo[] ) => this.length = photos.length,
      (error: any) => console.log(error));
  }

  photoClicked(id: string) {
    this.router.navigate([PHOTO_URL, id]);
  }

  pageInfoChanged(event: any) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex + 1;
    this.initializePhotos();
  }
}
