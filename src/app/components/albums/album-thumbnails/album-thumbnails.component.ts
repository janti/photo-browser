import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Photo } from 'src/app/models/photo';
import { Subscription } from 'rxjs';

const INITIAL_LENGTH = 100;
const INITIAL_PAGE_SIZE = 10;
const STARTING_INDEX = 1;
const ALBUM_ID_PARAMETER = 'albumId';
const PHOTO_URL = '/albums/thumbnails/photo';

@Component({
  selector: 'app-album-thumbnails',
  templateUrl: './album-thumbnails.component.html',
  styleUrls: ['./album-thumbnails.component.scss']
})
export class AlbumThumbnailsComponent implements OnInit, OnDestroy {

  albumId: string;
  photos: Photo[] = [];
  length: number;
  pageSize: number;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageIndex: number;

  photosFromAlbumSubscription: Subscription;
  allPhotosSubscription: Subscription;

  constructor(
    private photoService: PhotoService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location ) {

    this.length = INITIAL_LENGTH;
    this.pageSize = INITIAL_PAGE_SIZE;
    this.pageIndex = STARTING_INDEX;
   }

  ngOnInit() {
    this.albumId =  this.route.snapshot.paramMap.get(ALBUM_ID_PARAMETER);
    this.initializePhotos();
    this.initializePhotoCount();
  }

  ngOnDestroy() {
    if ( this.allPhotosSubscription ) {
      this.allPhotosSubscription.unsubscribe();
    }
    if ( this.photosFromAlbumSubscription ) {
      this.photosFromAlbumSubscription.unsubscribe();
    }
  }

  initializePhotos() {
   this.photosFromAlbumSubscription =
     this.photoService.getPhotosFromAlbum( this.pageSize, this.pageIndex, this.albumId ).subscribe(
        (photos: Photo[] ) => {
          this.photos = photos; },
        (error: any) => console.log(error));
  }

  initializePhotoCount() {
    this.allPhotosSubscription =
      this.photoService.getAllAlbumPhotos(this.albumId).subscribe(
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

  goBack() {
    this.location.back();
  }
}
