import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { Router } from '@angular/router';
import { Album } from 'src/app/models/album';
import { Subscription } from 'rxjs';

const ALBUM_THUMBNAILS_URL = '/albums/thumbnails';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit, OnDestroy {

  albums: Album[];
  albumId: string;
  albumSubscription: Subscription;

  constructor(private photoService: PhotoService, private router: Router) {
  }

  ngOnInit() {
    this.initializeAlbums();
  }

  ngOnDestroy() {
    if ( this.albumSubscription ) {
      this.albumSubscription.unsubscribe();
    }
  }

  initializeAlbums() {
    this.albumSubscription = this.photoService.getAlbums().subscribe(
      (albums: Album[] ) => {
        this.albums = albums; },
      (error: any) => console.log(error));
  }

  albumSelected( albumId: string ) {
    this.albumId = albumId;
    this.router.navigate([ALBUM_THUMBNAILS_URL, albumId]);
  }
}
