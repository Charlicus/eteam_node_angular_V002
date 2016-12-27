import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Observable } from 'rxjs/Observable'

import { UserService } from '../modules/user/services/user.service';
import { SpinnerService } from './spinner.service';
import { FlashService } from './flash.service';
import { Flash } from '../models/flash';


@Injectable()
export class AccessRightsService implements CanActivate{
  constructor(
    private userService: UserService,
    private spinnerService: SpinnerService,
    private flashService: FlashService,
    private router: Router
  ) {}

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.spinnerService.start();
    return this.userService.isAuthenticated().map(
      user => {
        if(state.url == '/welcome'){
          this.router.navigate(['/home']);
        }
        this.spinnerService.stop();
        this.userService.setLoggedIn(true);
        this.userService.setCurrentUser(user);
        return true;
      }
    ).catch(
      errors => {
        this.spinnerService.stop();
        this.userService.setLoggedIn(false);
        // Don't redircect if not logged in for some of the routes
        switch (state.url) {
          case '/user/signup'  : return Observable.of(true);
          case '/user/login'   : return Observable.of(true);
          case '/welcome' : return Observable.of(true);
          default:
            this.flashService.replaceWithNewFlash(new Flash('warning',['Please log in to see this page'],3500));
            this.router.navigate(['/user/login']);
            return Observable.of(false);
        }
      }
    );
  }
}