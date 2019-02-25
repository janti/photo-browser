import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThumbnailsComponent } from './components/thumbnails/thumbnails.component';
import { PhotoComponent } from './components/photo/photo.component';

const routes: Routes = [
  { path: 'thumbnails', component: ThumbnailsComponent },
  { path: 'photo/:id', component: PhotoComponent },
  { path: '', redirectTo: 'thumbnails', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
