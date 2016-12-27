import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

//import { AccessRightsService }      from '../../services/access-rights.service';

import { CreateTeamComponent }      from './components/create-team.component';
import { SearchTeamComponent }        from './components/search-team.component';
import { TeamComponent }            from './components/team.component';

const routes: Routes = [
    { path:'', redirectTo: '/team/all', pathMatch: 'full'},
    { path:'all', component: SearchTeamComponent},
    { path:'create', component: CreateTeamComponent },
    { path:':name', component: TeamComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TeamRoutingModule {}