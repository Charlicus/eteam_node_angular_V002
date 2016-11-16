import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }		from '../../components/home/home.component';
import { TeamsComponent }		from '../../components/teams/teams.component';
import { LoginComponent }		from '../../components/login/login.component';
import { SigninComponent }		from '../../components/sign-in/sign-in.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}