import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsComponent } from './albums.component';
import { CoreModule } from 'src/app/core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('AlbumsComponent', () => {
  let component: AlbumsComponent;
  let fixture: ComponentFixture<AlbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, HttpClientModule, AppRoutingModule],
      declarations: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
