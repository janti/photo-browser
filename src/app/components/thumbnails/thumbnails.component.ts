import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.scss']
})
export class ThumbnailsComponent implements OnInit {

  @Input() photos: Photo[] = [];
  @Input() length = 100;
  @Input() pageSize = 10;
  @Input() pageIndex = 1;
  albumId: any;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  @Output() photoClicked = new EventEmitter<number>();
  @Output() pageInfoChanged = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
    this.photos.forEach( (photo: Photo) => {
      photo.show = false;
    });
  }
  onPhotoClicked(id: number) {
    this.photoClicked.emit(id);
  }

  onPageInfoChanged(event: any) {
    this.pageInfoChanged.emit(event);
   }

}
