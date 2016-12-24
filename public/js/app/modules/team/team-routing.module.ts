import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

//import { AccessRightsService }      from '../../services/access-rights.service';

import { TeamComponent }            from './team.component';
import { CreateTeamComponent }      from './components/create-team.component'

const routes: Routes = [
    { path:'', component: TeamComponent },
    { path:'create', component: CreateTeamComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TeamRoutingModule {}