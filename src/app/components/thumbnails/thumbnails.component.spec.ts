import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailsComponent } from './thumbnails.component';
import { MatPaginatorModule } from '@angular/material';
import { CoreModule } from 'src/app/core/core.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

describe('ThumbnailsComponent', () => {
  let component: ThumbnailsComponent;
  let fixture: ComponentFixture<ThumbnailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        AppRoutingModule,
        HttpClientModule],
      declarations: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
