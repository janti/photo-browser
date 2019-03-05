import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoComponent } from './components/photo/photo.component';
import { HomeComponent } from './components/home/home.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumThumbnailsComponent } from './components/albums/album-thumbnails/album-thumbnails.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/photo/:id', component: PhotoComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:albumId', component: AlbumsComponent },
  { path: 'albums/thumbnails/:albumId', component: AlbumThumbnailsComponent },
  { path: 'albums/thumbnails/photo/:id', component: PhotoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
