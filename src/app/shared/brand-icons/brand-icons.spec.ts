import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandIcons } from './brand-icons';

describe('BrandIcons', () => {
  let component: BrandIcons;
  let fixture: ComponentFixture<BrandIcons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandIcons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandIcons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
