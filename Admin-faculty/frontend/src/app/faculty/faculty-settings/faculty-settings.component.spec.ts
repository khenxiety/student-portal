import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultySettingsComponent } from './faculty-settings.component';

describe('FacultySettingsComponent', () => {
  let component: FacultySettingsComponent;
  let fixture: ComponentFixture<FacultySettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultySettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
