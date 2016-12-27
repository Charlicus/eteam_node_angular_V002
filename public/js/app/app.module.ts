import { NgModule }			            from '@angular/core';
import { BrowserModule }	          from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { HttpModule, JsonpModule, XSRFStrategy, CookieXSRFStrategy}  from '@angular/http';
import { MomentModule }             from 'angular2-moment';

import './config/rxjs-operators';

import { AppRoutingModule }         from './app-routing.module';

import { TeamModule }               from './modules/team/team.module';
import { UserModule }               from './modules/user/user.module';

import { SharedModule }             from './modules/shared/shared.module';

import { FlashService }             from './services/flash.service';
import { SpinnerService }           from './services/spinner.service';
import { FeedService }              from './services/feed.service';



import { AppComponent }		          from './app.component';

import { HomeComponent }	          from './components/home/home.component';
import { WelcomeComponent }         from './components/welcome/welcome.component';
import { ProfileComponent }         from './components/profile/profile.component';
import { WallComponent }            from './components/wall/wall.component';


import { MenuComponent }  	        from './components/menu/menu.component';
import { FlashComponent }           from './components/flash/flash.component';
import { SpinnerComponent }         from './components/spinner/spinner.component';
import { WrongComponent }           from './components/wrong/wrong.component';




@NgModule({
  imports: [
  	BrowserModule,
  	AppRoutingModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MomentModule,
    TeamModule,
    SharedModule,
    UserModule
  ],
  declarations: [
  	AppComponent,
  	MenuComponent,
  	HomeComponent,
    FlashComponent,
    SpinnerComponent,
    WelcomeComponent,
    WrongComponent,
    ProfileComponent,
    WallComponent
  ],
  bootstrap: [
  	AppComponent
  ],
  providers: [
    { provide: XSRFStrategy, useValue: new CookieXSRFStrategy('csrf_cookie', 'X-CSRFToken')},
    FlashService,
    SpinnerService,
    FeedService
  ]
})

export class AppModule { }