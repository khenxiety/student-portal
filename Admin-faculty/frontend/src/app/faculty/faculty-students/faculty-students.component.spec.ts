import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyStudentsComponent } from './faculty-students.component';

describe('FacultyStudentsComponent', () => {
  let component: FacultyStudentsComponent;
  let fixture: ComponentFixture<FacultyStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
