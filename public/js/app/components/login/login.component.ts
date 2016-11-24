import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user';
import { Flash } from '../../models/flash';
import { UserService } from '../../services/user.service';
import { FlashService } from '../../services/flash.service';
import { SpinnerService } from '../../services/spinner.service';

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

  login(){
    this.spinnerService.start();
    this.userService.login(this.user).subscribe(
      user => this.loginSuccess(user),
      errors => this.loginError(errors)
    );
  }

  private loginSuccess(user: User){
		this.flashService.replaceWithNewFlash(new Flash('success',["You successfully logged in, Welcome Back !"],3500));
    this.userService.setLoggedIn(true);
		this.router.navigate(['/home']);
		this.spinnerService.stop();
  }

  private loginError(errors){
    let errorMessages:string[]=[];
		for(let error of JSON.parse(errors)){
			errorMessages.push(error.msg);
		}
		this.flashService.replaceWithNewFlash(new Flash('warning',errorMessages,5000));
		this.spinnerService.stop();
  }
}
