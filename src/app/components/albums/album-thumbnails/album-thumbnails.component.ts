import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-album-thumbnails',
  templateUrl: './album-thumbnails.component.html',
  styleUrls: ['./album-thumbnails.component.scss']
})
export class AlbumThumbnailsComponent implements OnInit {

  albumId: string;
  photos: Photo[] = [];
  length: number;
  pageSize: number;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageIndex: number;

  constructor(private photoService: PhotoService, private router: Router, private route: ActivatedRoute, private location: Location ) {
    this.length = 100;
    this.pageSize = 10;
    this.pageIndex = 1;
   }

  ngOnInit() {
    this.albumId =  this.route.snapshot.paramMap.get('albumId');
    this.initializePhotos();
    this.initializePhotoCount();
  }

  initializePhotos() {
    this.photoService.getPhotosFromAlbum( this.pageSize, this.pageIndex, this.albumId ). subscribe(
      (photos: Photo[] ) => {
        this.photos = photos; },
      (error) => console.log(error));
  }

  initializePhotoCount() {
    this.photoService.getAllAlbumPhotos(this.albumId).subscribe(
      (photos: Photo[] ) => this.length = photos.length,
      (error) => console.log(error));
  }

  photoClicked(id: any) {
    this.router.navigate(['/albums/thumbnails/photo', id]);
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
