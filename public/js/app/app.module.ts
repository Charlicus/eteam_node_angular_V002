import { NgModule }			    from '@angular/core';
import { BrowserModule }	  from '@angular/platform-browser';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { FormsModule }      from '@angular/forms';
import { HttpModule, JsonpModule }       from '@angular/http';

import { AppComponent }		  from './app.component';
import { MenuComponent }  	from './components/menu/menu.component';
import { HomeComponent }	  from './components/home/home.component';
import { TeamsComponent }	  from './components/teams/teams.component';
import { LoginComponent }   from './components/login/login.component';
import { SigninComponent }  from './components/sign-in/sign-in.component';


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
    SigninComponent
  ],
  bootstrap: [
  	AppComponent
  ],
  providers: [

  ]
})

export class AppModule { }
