import { BrowserModule } from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatAutocompleteModule,
  MatButtonModule, MatCardModule, MatDialogModule,
  MatGridListModule, MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule,
  MatOptionModule, MatProgressSpinnerModule,
  MatSelectModule, MatSidenavModule, MatSnackBarModule, MatToolbarModule
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


const appRoutes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: '', component: HomeComponent},
  {path: 'admin', component: AdminPanelComponent},
  {path: 'create-course', component: CreateCourseComponent},
  {path: 'create-session', component: CreateSessionComponent},
  {path: 'create-seminar', component: CreateSeminarComponent},
  {path: 'view-course', component: ViewCourseComponent},
  {path: 'view-session', component: ViewSessionComponent},
  {path: 'view-seminar', component: ViewSeminarComponent}

];

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log(localStorage.getItem('Authorization'));
    if ( localStorage.getItem('Authorization') == null) {
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
    ViewSessionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
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
    NoopAnimationsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RegistrationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: XhrInterceptor,
      multi: true
    },
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
    , AuthenticationService],
  bootstrap: [AppComponent],
  entryComponents: [LogindialogComponent]
})
export class AppModule { }

