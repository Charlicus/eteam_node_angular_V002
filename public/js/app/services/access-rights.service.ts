import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Observable } from 'rxjs/Observable'

import { UserService } from './user.service';
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
      status => {
        this.spinnerService.stop();
        this.userService.setLoggedIn(true);
        return true;
      }
    ).catch(
      errors => {
        this.spinnerService.stop();
        this.userService.setLoggedIn(false);
        this.flashService.replaceWithNewFlash(new Flash('warning',['Please log in to see this page'],3500));
        this.router.navigate(['login']);
        return Observable.throw(false);
      }
    );
  }
}