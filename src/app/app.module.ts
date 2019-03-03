import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AlbumThumbnailsComponent } from './components/albums/album-thumbnails/album-thumbnails.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent, ToolbarComponent]
})
export class AppModule { }
