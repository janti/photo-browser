import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatGridListModule, MatToolbarModule, MatButtonModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DeferLoadModule } from '@trademe/ng-defer-load';
import { ThumbnailsComponent } from './components/thumbnails/thumbnails.component';
import { PhotoComponent } from './components/photo/photo.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
