import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextsecBtn } from './nextsec-btn';

describe('NextsecBtn', () => {
  let component: NextsecBtn;
  let fixture: ComponentFixture<NextsecBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextsecBtn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextsecBtn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
