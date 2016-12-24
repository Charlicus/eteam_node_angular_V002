import { NgModule }			            from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { FormsModule }                  from '@angular/forms';
import { HttpModule, JsonpModule, XSRFStrategy, CookieXSRFStrategy}  from '@angular/http';
import { MomentModule }                 from 'angular2-moment';

//import './config/rxjs-operators';

import { TeamRoutingModule }            from './team-routing.module';

import { TeamService }                  from './services/team.service';

import { TeamComponent }                from './team.component';
import { CreateTeamComponent }          from './components/create-team.component'; 


@NgModule({
    imports: [
        CommonModule,
        TeamRoutingModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        MomentModule
    ],
    declarations: [
        TeamComponent,
        CreateTeamComponent
    ],
    providers:[
        { provide: XSRFStrategy, useValue: new CookieXSRFStrategy('csrf_cookie', 'X-CSRFToken')},
        TeamService
    ]
})

export class TeamModule { }