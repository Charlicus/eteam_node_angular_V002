import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

//import { AccessRightsService }      from '../../services/access-rights.service';

import { UserComponent }            from './user.component';
import { LoginComponent }           from './components/login.component'

const routes: Routes = [
    { path:'', component: LoginComponent },
    { path:'login', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule {}