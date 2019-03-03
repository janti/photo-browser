import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatGridListModule, MatToolbarModule, MatButtonModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DeferLoadModule } from '@trademe/ng-defer-load';
import { ThumbnailsComponent } from '../components/thumbnails/thumbnails.component';
import { PhotoComponent } from '../components/photo/photo.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/home/home.component';
import { AlbumsComponent } from '../components/albums/albums.component';
import { AlbumThumbnailsComponent } from '../components/albums/album-thumbnails/album-thumbnails.component';

@NgModule({
  declarations: [
    ThumbnailsComponent,
    PhotoComponent,
    HomeComponent,
    AlbumsComponent,
    AlbumThumbnailsComponent
  ],
  imports: [
    MatCardModule,
    MatGridListModule,
    DeferLoadModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  exports: [
    MatCardModule,
    MatGridListModule,
    DeferLoadModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class CoreModule { }
