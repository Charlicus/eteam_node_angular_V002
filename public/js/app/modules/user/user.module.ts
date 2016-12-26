import { NgModule }			            from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { FormsModule }                  from '@angular/forms';
import { HttpModule, JsonpModule, XSRFStrategy, CookieXSRFStrategy}  from '@angular/http';
import { MomentModule }                 from 'angular2-moment';

//import './config/rxjs-operators';

import { SharedModule }             from './../shared/shared.module';


import { UserRoutingModule }            from './user-routing.module';

import { UserService }                  from './services/user.service';

import { UserComponent }                from './user.component';
//import { CreateTeamComponent }          from './components/create-user.component';  
//import { AllTeamsComponent  }           from './components/all-teams.component';


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
        UserComponent
    ],
    providers:[
        { provide: XSRFStrategy, useValue: new CookieXSRFStrategy('csrf_cookie', 'X-CSRFToken')},
        UserService
    ]
})

export class UserModule { }