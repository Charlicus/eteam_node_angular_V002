import { NgModule }			            from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { FormsModule }                  from '@angular/forms';
import { HttpModule, JsonpModule, XSRFStrategy, CookieXSRFStrategy}  from '@angular/http';
import { MomentModule }                 from 'angular2-moment';

import { SharedModule }                 from './../shared/shared.module';

import { TeamRoutingModule }            from './team-routing.module';

import { TeamComponent }                from './components/team.component';
import { CreateTeamComponent }          from './components/create-team.component';  
import { SearchTeamComponent  }           from './components/search-team.component';


@NgModule({
    imports: [
        CommonModule,
        TeamRoutingModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        MomentModule,
        SharedModule
    ],
    declarations: [
        TeamComponent,
        CreateTeamComponent,
        SearchTeamComponent
    ],
    providers:[
        { provide: XSRFStrategy, useValue: new CookieXSRFStrategy('csrf_cookie', 'X-CSRFToken')}
    ]
})

export class TeamModule { }