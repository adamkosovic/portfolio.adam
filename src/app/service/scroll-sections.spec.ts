import { TestBed } from '@angular/core/testing';

import { ScrollSections } from './scroll-sections';

describe('ScrollSections', () => {
  let service: ScrollSections;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollSections);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
