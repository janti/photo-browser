import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thumbnails-view',
  templateUrl: './thumbnails-view.component.html',
  styleUrls: ['./thumbnails-view.component.scss']
})
export class ThumbnailsViewComponent implements OnInit {

  constructor( private photoService: PhotoService, private router: Router) {}
  photos: Photo[] = [];
  ngOnInit() {
    this.photos = this.photoService.getPhotos();
    this.photos.forEach( (photo: Photo) => {
      photo.show = false;
    });
  }
  click(i: number) {
    console.log(i);
    this.router.navigate(['/photo', i]);

  }

}
