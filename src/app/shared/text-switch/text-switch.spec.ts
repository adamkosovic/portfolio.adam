import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSwitch } from './text-switch';

describe('TextSwitch', () => {
  let component: TextSwitch;
  let fixture: ComponentFixture<TextSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextSwitch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextSwitch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
