import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ClassInfoComponent } from './admin/class-info/class-info.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { StudentsComponent } from './admin/students/students.component';
import { SubjectsComponent } from './admin/subjects/subjects.component';
import { TeachersComponent } from './admin/teachers/teachers.component';
import { UsersComponent } from './admin/users/users.component';
import { ErrorPageComponent } from './error/error-page/error-page.component';
import { FacultyClassesComponent } from './faculty/faculty-classes/faculty-classes.component';
import { FacultyDashComponent } from './faculty/faculty-dash/faculty-dash.component';
import { FacultySettingsComponent } from './faculty/faculty-settings/faculty-settings.component';
import { FacultyStudentsComponent } from './faculty/faculty-students/faculty-students.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '',component:IndexComponent
  },
  {
    path: 'admin-dash',component:AdminDashboardComponent
  },
  {
    path: 'class-info',component:ClassInfoComponent
  },
  {
    path: 'subjects',component:SubjectsComponent
  },
  {
    path: 'students',component:StudentsComponent
  },
  {
    path: 'teachers',component:TeachersComponent
  },
  {
    path: 'settings',component:SettingsComponent
  },
  {
    path: 'users',component:UsersComponent
  },
  {
    path: 'err',component:ErrorPageComponent
  },
  {
    path: 'faculty-dash',component:FacultyDashComponent
  },
  {
    path: 'faculty-classes',component:FacultyClassesComponent
  },
  {
    path: 'faculty-students',component:FacultyStudentsComponent
  },
  {
    path: 'faculty-settings',component:FacultySettingsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
