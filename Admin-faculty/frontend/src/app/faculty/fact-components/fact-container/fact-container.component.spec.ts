import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactContainerComponent } from './fact-container.component';

describe('FactContainerComponent', () => {
  let component: FactContainerComponent;
  let fixture: ComponentFixture<FactContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
