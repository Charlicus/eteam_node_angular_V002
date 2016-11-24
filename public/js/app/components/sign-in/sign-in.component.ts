import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user';
import { Flash } from '../../models/flash';
import { UserService } from '../../services/user.service';
import { FlashService } from '../../services/flash.service';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  moduleId: module.id,
  selector: 'sign-in',
  templateUrl: './sign-in.component.html'
})

export class SigninComponent {
	//private user: User = new User();
	private user: User = new User(0,'charlicus@hotmail.com','charlicus','aaaaaa','aaaaaa'); // to be removed for testing only

	constructor(
		private userService: UserService,
		private flashService: FlashService,
		private spinnerService: SpinnerService,
		private router: Router
	) {}

	public signIn(): void{
		this.spinnerService.start();
		this.userService.signIn(this.user).subscribe(
			user => this.signInSuccess(user),
			errors => this.signInError(errors)
		);
	}

	private signInSuccess(user: User): void{
		this.flashService.replaceWithNewFlash(new Flash('success',['You successfully signed in, Welcome !'],3500));
		this.userService.setLoggedIn(true);
		this.router.navigate(['home']);
		this.spinnerService.stop();
		
	}

	private signInError(errors): void{
		let errorMessages:string[]=[];
		for(let error of JSON.parse(errors)){
			errorMessages.push(error.msg);
		}
		this.flashService.addFlash(new Flash('warning',errorMessages,5000));
		this.spinnerService.stop();
	}
}
