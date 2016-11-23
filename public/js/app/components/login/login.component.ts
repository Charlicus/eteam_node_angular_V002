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

  logIn(){
    this.spinnerService.start();
    this.userService.logIn(this.user).subscribe(
      user => this.logInSuccess(user),
      errors => this.logInError(errors)
    );
  }

  private logInSuccess(user: User){
    console.log('success')
    this.spinnerService.stop();
  }

  private logInError(errors){
    let errorMessages:string[]=[];
		for(let error of JSON.parse(errors)){
			errorMessages.push(error.msg);
		}
		this.flashService.replaceWithNewFlash(new Flash('warning',errorMessages,5000));
		this.spinnerService.stop();
  }
}
