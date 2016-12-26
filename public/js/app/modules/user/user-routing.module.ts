import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

//import { AccessRightsService }      from '../../services/access-rights.service';

import { UserComponent }            from './user.component';

const routes: Routes = [
    { path:'', component: UserComponent}
];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule {}