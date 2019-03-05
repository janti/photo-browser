import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from 'src/app/services/photo.service';
import { Location } from '@angular/common';
import { Photo } from 'src/app/models/photo';
import { Subscription } from 'rxjs';

const ID_PARAMETER = 'id';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit, OnDestroy {

  photo: Photo;
  photoSubscription: Subscription;

  constructor( private route: ActivatedRoute, private photoService: PhotoService, private location: Location) { }

  ngOnInit() {
    const id =  this.route.snapshot.paramMap.get(ID_PARAMETER);

    if ( id ) {
      this.initializePhoto(id);
    }
  }

  ngOnDestroy() {
    if ( this.photoSubscription )  {
      this.photoSubscription.unsubscribe();
    }
  }

  initializePhoto(id: string) {
    this.photoSubscription = this.photoService.getPhoto(id).subscribe(
      (photo: Photo) => {
        this.photo = photo;
        this.photo.show = true;
      },
      (error: any) => console.log(error));
  }

  goBack() {
    this.location.back();
  }
}
