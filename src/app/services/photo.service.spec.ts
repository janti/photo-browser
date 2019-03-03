import { TestBed } from '@angular/core/testing';

import { PhotoService } from './photo.service';
import { HttpClientModule } from '@angular/common/http';

describe('PhotoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule],
  }));

  it('should be created', () => {
    const service: PhotoService = TestBed.get(PhotoService);
    expect(service).toBeTruthy();
  });
});
