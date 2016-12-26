import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

//import { AccessRightsService }      from '../../services/access-rights.service';

import { TeamComponent }            from './team.component';
import { CreateTeamComponent }      from './components/create-team.component';
import { AllTeamsComponent }        from './components/all-teams.component';

const routes: Routes = [
    { path:'', redirectTo: '/team/all', pathMatch: 'full'},
    { path:'all', component: AllTeamsComponent},
    { path:'create', component: CreateTeamComponent },
    { path:':name', component: TeamComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TeamRoutingModule {}