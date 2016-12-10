import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { AccessRightsService }      from '../../services/access-rights.service';

import { TeamComponent }            from './team.component';

const routes: Routes = [
    {
        path: '',
        component: TeamComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TeamRoutingModule {}