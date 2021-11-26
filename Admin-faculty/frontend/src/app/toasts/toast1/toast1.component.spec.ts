import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Toast1Component } from './toast1.component';

describe('Toast1Component', () => {
  let component: Toast1Component;
  let fixture: ComponentFixture<Toast1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Toast1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Toast1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
