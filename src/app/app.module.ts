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


const appRoutes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: '', component: HomeComponent}
];

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    LogindialogComponent
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
  providers: [RegistrationService,{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},AuthenticationService],
  bootstrap: [AppComponent],
  entryComponents: [LogindialogComponent]
})
export class AppModule { }
