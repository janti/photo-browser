import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThumbnailsViewComponent } from './components/thumbnails-view/thumbnails-view.component';
import { PhotoViewComponent } from './components/photo-view/photo-view.component';

const routes: Routes = [
  { path: 'thumbnails', component: ThumbnailsViewComponent },
  { path: 'photo/:id', component: PhotoViewComponent },
  { path: '', redirectTo: 'thumbnails', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
