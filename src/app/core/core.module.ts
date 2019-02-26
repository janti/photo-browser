import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatGridListModule, MatToolbarModule, MatButtonModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DeferLoadModule } from '@trademe/ng-defer-load';
import { ThumbnailsComponent } from '../components/thumbnails/thumbnails.component';
import { PhotoComponent } from '../components/photo/photo.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ThumbnailsComponent,
    PhotoComponent
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
