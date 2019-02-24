import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatGridListModule } from '@angular/material';
import { DeferLoadModule } from '@trademe/ng-defer-load';
import { ThumbnailsViewComponent } from './components/thumbnails-view/thumbnails-view.component';
import { PhotoViewComponent } from './components/photo-view/photo-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ThumbnailsViewComponent,
    PhotoViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    DeferLoadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
