import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccessRightsService }  from '../../services/access-rights.service';

import { HomeComponent }		from '../../components/home/home.component';
import { TeamsComponent }		from '../../components/teams/teams.component';
import { LoginComponent }		from '../../components/login/login.component';
import { SignupComponent }		from '../../components/signup/signup.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AccessRightsService] },
  { path: 'teams', component: TeamsComponent, canActivate: [AccessRightsService] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ AccessRightsService ]
})

export class AppRoutingModule {}