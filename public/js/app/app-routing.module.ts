import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccessRightsService }  from './services/access-rights.service';

import { HomeComponent }		    from './components/home/home.component';
import { LoginComponent }		    from './components/login/login.component';
import { SignupComponent }		  from './components/signup/signup.component';
import { WelcomeComponent }     from './components/welcome/welcome.component';
import { WrongComponent }       from './components/wrong/wrong.component';
import { ProfileComponent }     from './components/profile/profile.component';


const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AccessRightsService] },
  { path: 'team', loadChildren: './js/app/modules/team/team.module#TeamModule' ,canActivate: [AccessRightsService] },
  { path: 'login', component: LoginComponent, canActivate: [AccessRightsService] },
  { path: 'signup', component: SignupComponent, canActivate: [AccessRightsService] },
  { path: 'welcome', component: WelcomeComponent, canActivate: [AccessRightsService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AccessRightsService] },
  { path: '**', component: WrongComponent, canActivate: [AccessRightsService]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ AccessRightsService ]
})

export class AppRoutingModule {}