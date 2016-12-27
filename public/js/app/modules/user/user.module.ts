import { NgModule }			            from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { FormsModule }                  from '@angular/forms';
import { HttpModule, JsonpModule, XSRFStrategy, CookieXSRFStrategy}  from '@angular/http';
import { MomentModule }                 from 'angular2-moment';

import { SharedModule }                 from './../shared/shared.module';


import { UserRoutingModule }            from './user-routing.module';

import { UserComponent }                from './user.component';
import { LoginComponent }               from './components/login.component';
import { SignupComponent }              from './components/signup.component';
import { ProfileComponent }             from './components/profile.component';
import { WallComponent }                from './../../components/wall/wall.component';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        MomentModule,
        SharedModule
    ],
    declarations: [
        UserComponent,
        LoginComponent,
        SignupComponent,
        ProfileComponent,
        WallComponent
    ],
    providers:[
        { provide: XSRFStrategy, useValue: new CookieXSRFStrategy('csrf_cookie', 'X-CSRFToken')},
    ]
})

export class UserModule { }