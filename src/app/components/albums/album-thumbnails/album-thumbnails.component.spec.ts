import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumThumbnailsComponent } from './album-thumbnails.component';
import { CoreModule } from 'src/app/core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('AlbumThumbnailsComponent', () => {
  let component: AlbumThumbnailsComponent;
  let fixture: ComponentFixture<AlbumThumbnailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, CoreModule, HttpClientModule],
      declarations: [],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumThumbnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
