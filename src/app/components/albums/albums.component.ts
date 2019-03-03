import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo-service.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albums: Album[];
  albumId: string;

  constructor(private photoService: PhotoService, private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.getAlbums();
  }
  getAlbums() {
    this.photoService.getAlbums(). subscribe(
      (albums: Album[] ) => {
        this.albums = albums; },
      (error) => console.log(error));
  }

  albumSelected( albumId: string ) {
    this.albumId = albumId;
    this.router.navigate(['/albums/thumbnails', albumId]);
  }

  getUserName( userId: string ) {
    this.userService.getUser( userId ). subscribe(
      (response: User ) => {
        return response.name;
      },
      (error) => console.log(error));
    }
}
