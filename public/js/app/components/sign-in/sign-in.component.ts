import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user';
import { Flash } from '../../models/flash';
import { UserService } from '../../services/user.service';
import { FlashService } from '../../services/flash.service';
import { SpinnerService } from '../../services/spinner.service';


// Import RJX Operators

@Component({
  moduleId: module.id,
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  providers: [UserService]
})

export class SigninComponent {
	//private user: User = new User();
	private user: User = new User(0,'charlicus@hotmail.com','charlicus','aaaaaa','aaaaaa');

	constructor(
		private userService: UserService,
		private flashService: FlashService,
		private spinnerService: SpinnerService,
		private router: Router
	) {}

	signIn(){
		this.spinnerService.start();
		this.userService.signIn(this.user).subscribe(
			user => this.signInSuccess(user),
			errors => this.signInError(errors)
		);
	}

	signInSuccess(user: User){
		this.flashService.replaceWithNewFlash(new Flash('success',["You successfully signed in, Welcome !"],3000));
		this.router.navigateByUrl('/home');
		this.spinnerService.stop();
		
	}

	signInError(errors){
		let errorMessages:string[]=[];
		for(let error of JSON.parse(errors)){
			errorMessages.push(error.msg);
		}
		this.flashService.replaceWithNewFlash(new Flash('warning',errorMessages,5000));
		this.spinnerService.stop();
	}
}
