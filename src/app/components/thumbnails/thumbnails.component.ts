import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from 'src/app/models/photo';

const DEFAULT_LENGTH = 100;
const DEFAULT_PAGE_SIZE = 10;
const STARTING_INDEX = 1;

@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.scss']
})
export class ThumbnailsComponent implements OnInit {

  @Input() photos: Photo[] = [];
  @Input() length = DEFAULT_LENGTH;
  @Input() pageSize = DEFAULT_PAGE_SIZE;
  @Input() pageIndex = STARTING_INDEX;

  @Output() photoClicked = new EventEmitter<number>();
  @Output() pageInfoChanged = new EventEmitter<any>();

  albumId: string;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor() {}

  ngOnInit() {

    // For lazy loading feature
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
