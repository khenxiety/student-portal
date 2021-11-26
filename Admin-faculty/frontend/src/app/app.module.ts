import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdSidebarComponent } from './admin/components/ad-sidebar/ad-sidebar.component';
import { ClassInfoComponent } from './admin/class-info/class-info.component';
import { SubjectsComponent } from './admin/subjects/subjects.component';
import { StudentsComponent } from './admin/students/students.component';
import { TeachersComponent } from './admin/teachers/teachers.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { HeaderComponent } from './admin/components/header/header.component';
import { UsersComponent } from './admin/users/users.component';
import { ErrorPageComponent } from './error/error-page/error-page.component';
import { Toast1Component } from './toasts/toast1/toast1.component';
import { AddedComponent } from './toasts/added/added.component';
import { UpdateComponent } from './toasts/update/update.component';
import { FooterComponent } from './admin/components/footer/footer.component';
import { FacultyDashComponent } from './faculty/faculty-dash/faculty-dash.component';
import { FactContainerComponent } from './faculty/fact-components/fact-container/fact-container.component';
import { FacultyHeaderComponent } from './faculty/fact-components/faculty-header/faculty-header.component';
import { FacultyStudentsComponent } from './faculty/faculty-students/faculty-students.component';
import { FacultyClassesComponent } from './faculty/faculty-classes/faculty-classes.component';
import { FacultySettingsComponent } from './faculty/faculty-settings/faculty-settings.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AdminDashboardComponent,
    AdSidebarComponent,
    ClassInfoComponent,
    SubjectsComponent,
    StudentsComponent,
    TeachersComponent,
    SettingsComponent,
    HeaderComponent,
    UsersComponent,
    ErrorPageComponent,
    Toast1Component,
    AddedComponent,
    UpdateComponent,
    FooterComponent,
    FacultyDashComponent,
    FactContainerComponent,
    FacultyHeaderComponent,
    FacultyStudentsComponent,
    FacultyClassesComponent,
    FacultySettingsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
