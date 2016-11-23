import { NgModule }			            from '@angular/core';
import { BrowserModule }	          from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { HttpModule, JsonpModule, XSRFStrategy, CookieXSRFStrategy}  from '@angular/http';

import './config/rxjs-operators';

import { AppRoutingModule }         from './modules/app-routing/app-routing.module';

import { FlashService }             from './services/flash.service';
import { SpinnerService }           from './services/spinner.service';
import { UserService }              from './services/user.service';

import { AppComponent }		          from './app.component';
import { MenuComponent }  	        from './components/menu/menu.component';
import { HomeComponent }	          from './components/home/home.component';
import { TeamsComponent }	          from './components/teams/teams.component';
import { LoginComponent }           from './components/login/login.component';
import { SigninComponent }          from './components/sign-in/sign-in.component';
import { FlashComponent }           from './components/flash/flash.component';
import { SpinnerComponent }         from './components/spinner/spinner.component';




@NgModule({
  imports: [
  	BrowserModule,
  	AppRoutingModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [
  	AppComponent,
  	MenuComponent,
  	HomeComponent,
  	TeamsComponent,
    LoginComponent,
    SigninComponent,
    FlashComponent,
    SpinnerComponent
  ],
  bootstrap: [
  	AppComponent
  ],
  providers: [
    { provide: XSRFStrategy, useValue: new CookieXSRFStrategy('csrf_cookie', 'X-CSRFToken')},
    FlashService,
    SpinnerService,
    UserService
  ]
})

export class AppModule { }
