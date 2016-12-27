import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../../models/user';
import { Flash } from '../../../models/flash';

import { UserService } from '../../../services/user.service';
import { FlashService } from '../../../services/flash.service';
import { SpinnerService } from '../../../services/spinner.service';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  //private user: User = new User();
  private user: User = new User(0,'charlicus@hotmail.com','charlicus','aaaaaa','aaaaaa'); // to be removed for testing only

	constructor(
		private userService: UserService,
		private flashService: FlashService,
		private spinnerService: SpinnerService,
		private router: Router
	) {}

  private login(): void{
    this.spinnerService.start();
    this.userService.login(this.user).subscribe(
      user => this.loginSuccess(user),
      error => this.loginError(error)
    );
  }

  private loginSuccess(user: User): void{
	  this.flashService.replaceWithNewFlash(new Flash('success',['You successfully logged in, Welcome Back !'],3500));
    this.userService.setLoggedIn(true);
    this.userService.setCurrentUser(user);
	  this.router.navigate(['/home']);
	  this.spinnerService.stop();
  }

  private loginError(error): void{
	  this.flashService.replaceWithNewFlash(new Flash(error.type,error.messages,5000));
	  this.spinnerService.stop();
  }
}
