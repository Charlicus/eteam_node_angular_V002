import { NgModule }			            from '@angular/core';
import { BrowserModule }	          from '@angular/platform-browser';
import { AppRoutingModule }         from './modules/app-routing/app-routing.module';
import { FormsModule }              from '@angular/forms';
import { HttpModule, JsonpModule, XSRFStrategy, CookieXSRFStrategy}  from '@angular/http';


import './config/rxjs-operators'; // not sure it's the right location to import it


import { AppComponent }		          from './app.component';
import { MenuComponent }  	        from './components/menu/menu.component';
import { HomeComponent }	          from './components/home/home.component';
import { TeamsComponent }	          from './components/teams/teams.component';
import { LoginComponent }           from './components/login/login.component';
import { SigninComponent }          from './components/sign-in/sign-in.component';
import { FlashComponent }           from './utilities/components/flash.component';


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
    FlashComponent
  ],
  bootstrap: [
  	AppComponent
  ],
  providers: [
    { provide: XSRFStrategy, useValue: new CookieXSRFStrategy('csrf_cookie', 'X-CSRFToken')}
  ]
})

export class AppModule { }
