import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumThumbnailsComponent } from './album-thumbnails.component';

describe('AlbumThumbnailsComponent', () => {
  let component: AlbumThumbnailsComponent;
  let fixture: ComponentFixture<AlbumThumbnailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumThumbnailsComponent ]
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
