import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thumbnails-view',
  templateUrl: './thumbnails-view.component.html',
  styleUrls: ['./thumbnails-view.component.scss']
})
export class ThumbnailsViewComponent implements OnInit {

  photos: Photo[] = [];
  constructor( private photoService: PhotoService, private router: Router) {}

  ngOnInit() {
    this.getPhotos();
  }
  getPhotos() {
    this.photoService.getPhotos().subscribe(
      (photos: Photo[] ) => {
        this.photos.forEach( (photo: Photo) => {
          photo.show = false;
        });
        this.photos = photos; },
      (error) => console.log(error));
  }
  click(i: number) {
    console.log(i);
    this.router.navigate(['/photo', i]);

  }

}
