import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { PhotoService } from 'src/app/services/photo.service';
import { Location } from '@angular/common';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  photo: Photo;

  constructor( private route: ActivatedRoute, private photoService: PhotoService, private location: Location) { }

  ngOnInit() {
    const id =  this.route.snapshot.paramMap.get('id');
    this.getPhoto(id);
  }

  getPhoto(id: string) {
    this.photoService.getPhoto(id).subscribe(
      (photo: Photo ) => {
        this.photo = photo;
        this.photo.show = true;
      },
      (error: Error) => console.log(error));
  }
  goBack() {
    this.location.back();
  }
}
