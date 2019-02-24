import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailsViewComponent } from './thumbnails-view.component';

describe('ThumbnailsViewComponent', () => {
  let component: ThumbnailsViewComponent;
  let fixture: ComponentFixture<ThumbnailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbnailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
