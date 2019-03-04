import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { Router } from '@angular/router';
import { Album } from 'src/app/models/album';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albums: Album[];
  albumId: string;

  constructor(private photoService: PhotoService, private router: Router) {
  }

  ngOnInit() {
    this.initializeAlbums();
  }

  initializeAlbums() {
    this.photoService.getAlbums(). subscribe(
      (albums: Album[] ) => {
        this.albums = albums; },
      (error: any) => console.log(error));
  }

  albumSelected( albumId: string ) {
    this.albumId = albumId;
    this.router.navigate(['/albums/thumbnails', albumId]);
  }
}
