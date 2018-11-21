import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, Injectable, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatAutocompleteModule,
  MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule,
  MatGridListModule, MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule,
  MatOptionModule, MatProgressSpinnerModule, MatRadioModule,
  MatSelectModule, MatSidenavModule, MatSnackBarModule, MatTableModule, MatToolbarModule
} from '@angular/material';
import { RegisterComponent } from './components/register/register.component';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LayoutModule} from '@angular/cdk/layout';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationService} from './sevices/registration.service';
import {ToasterModule} from 'angular5-toaster/dist';
import {Observable, Subject} from 'rxjs';
import { LogindialogComponent } from './logindialog/logindialog.component';
import {HttpModule} from '@angular/http';
import {AuthenticationService} from './services/authentication.service';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { ViewCourseComponent } from './components/view-course/view-course.component';
import { CreateSessionComponent } from './components/create-session/create-session.component';
import { CreateSeminarComponent } from './components/create-seminar/create-seminar.component';
import { ViewSeminarComponent } from './components/view-seminar/view-seminar.component';
import { ViewSessionComponent } from './components/view-session/view-session.component';
import {AdminCourseService} from './services/admin-course.service';
import * as path from 'path';
import { QuotesCarouselComponent } from './components/quotes-carousel/quotes-carousel.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UpcomingSeminarListComponent } from './components/upcoming-seminar-list/upcoming-seminar-list.component';
import { UpcomingSessionListComponent } from './components/upcoming-session-list/upcoming-session-list.component';
import { RecentSessionListComponent } from './components/recent-session-list/recent-session-list.component';
import { RecentSeminarListComponent } from './components/recent-seminar-list/recent-seminar-list.component';
import {MatPaginatorModule, MatSortModule, MatTableDataSource} from '@angular/material';
import { BookSeatForSeminarDialogComponent } from './components/book-seat-for-seminar-dialog/book-seat-for-seminar-dialog.component';
import { CancelSeatForSeminarDialogComponent } from './components/cancel-seat-for-seminar-dialog/cancel-seat-for-seminar-dialog.component';
import { UserRoleMappingComponent } from './components/user-role-mapping/user-role-mapping.component';
import {User} from './models/User';
import {SharedService} from './services/shared.service';
import {MatExpansionModule} from '@angular/material/expansion';

import {UdgaarHomePageComponent} from './components/udgaar-home-page/udgaar-home-page.component';
import {UdgaarService} from './services/udgaar.service';
import { AttendancePanelComponent } from './components/attendance-panel/attendance-panel.component';
import { MarkAttendacneForSeminarComponent } from './components/mark-attendacne-for-seminar/mark-attendacne-for-seminar.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import {ContactUsComponent} from './components/contact-us/contact-us.component';
import { UpdateSeminarComponent } from './components/update-seminar/update-seminar.component';
import {UpcomingSeminarDetailComponent} from './components/upcoming-seminar-detail/upcoming-seminar-detail.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileListComponent } from './components/user-profile-list/user-profile-list.component';
import { ViewAttendancePanelComponent } from './components/view-attendance-panel/view-attendance-panel.component';
import { CallingSevaSeminarListComponent } from './components/calling-seva-seminar-list/calling-seva-seminar-list.component';
import {CallingSevaMarkResponseComponent} from './components/calling-seva-mark-response/calling-seva-mark-response.component';
import {CallingSewaResponseService} from './services/calling-sewa-response.service';
import { ReportDialogComponent } from './components/report-dialog/report-dialog.component';

const appRoutes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: '', component: HomeComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'admin', component: AdminPanelComponent},
  {path: 'attendancePanel', component: AttendancePanelComponent},
  {path: 'markSeminarAttendance/:id', component: MarkAttendacneForSeminarComponent},
  {path: 'viewAttendace/:id', component: ViewAttendancePanelComponent},
  {path: 'contactUs', component: ContactUsComponent},
  {path: 'createCourse', component: CreateCourseComponent},
  {path: 'createSession', component: CreateSessionComponent},
  {path: 'createSeminar', component: CreateSeminarComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'recentSeminar', component: RecentSeminarListComponent},
  {path: 'recentSession', component: RecentSessionListComponent},
  {path: 'udgaar', component: UdgaarHomePageComponent},
  {path: 'upcomingSeminar', component: UpcomingSeminarListComponent},
  {path: 'upcomingSession', component: UpcomingSessionListComponent},
  {path: 'viewCourse', component: ViewCourseComponent},
  {path: 'viewSession', component: ViewSessionComponent},
  {path: 'viewSeminar', component: ViewSeminarComponent},
  {path: 'userRoleMapping', component: UserRoleMappingComponent},
  {path: 'updateSeminar', component: UpdateSeminarComponent},
  {path: 'seminarDetails/:id', component: UpcomingSeminarDetailComponent},
  {path: 'userProfile/:id', component: UserProfileComponent},
  {path: 'userList', component: UserProfileListComponent},
  {path: 'seminarsForCallingSeva', component: CallingSevaSeminarListComponent},
  {path: 'callingSeva/:id', component: CallingSevaMarkResponseComponent}

];

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log(localStorage.getItem('Authorization'));
    if (localStorage.getItem('Authorization') == null) {
      console.log(localStorage.getItem('Authorization'));
      const xhr = req.clone({
        setHeaders: {
          'X-Requested-With' : 'XMLHttpRequest'
        }
      });
      return next.handle(xhr);
    } else {
      const xhr = req.clone({
        setHeaders: {
          'X-Requested-With' : 'XMLHttpRequest',
          'Authorization' : 'Basic ' + localStorage.getItem('Authorization')
        }
      });
      return next.handle(xhr);
    }
  }
}

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    LogindialogComponent,
    AdminPanelComponent,
    CreateCourseComponent,
    ViewCourseComponent,
    CreateSessionComponent,
    CreateSeminarComponent,
    ViewSeminarComponent,
    ViewSessionComponent,
    QuotesCarouselComponent,
    DashboardComponent,
    RecentSeminarListComponent,
    RecentSessionListComponent,
    UdgaarHomePageComponent,
    UpcomingSeminarListComponent,
    UpcomingSessionListComponent,
    BookSeatForSeminarDialogComponent,
    CancelSeatForSeminarDialogComponent,
    UserRoleMappingComponent,
    AttendancePanelComponent,
    MarkAttendacneForSeminarComponent,
    AboutUsComponent,
    ContactUsComponent,
    UpdateSeminarComponent,
    UpcomingSeminarDetailComponent,
    UserProfileComponent,
    UserProfileListComponent,
    ViewAttendancePanelComponent,
    CallingSevaSeminarListComponent,
    CallingSevaMarkResponseComponent,
    ReportDialogComponent,
  ],
  imports: [
    MatIconModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatNativeDateModule,
    MatGridListModule,
    MatMenuModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatExpansionModule,
    MatRadioModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [RegistrationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: XhrInterceptor,
      multi: true
    },
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
    , AuthenticationService, CallingSewaResponseService, UdgaarService],
  bootstrap: [AppComponent],
  entryComponents: [LogindialogComponent, BookSeatForSeminarDialogComponent,
  CancelSeatForSeminarDialogComponent, ReportDialogComponent]
})
export class AppModule { }

