import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';


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
		private router: Router
	) {}

	signIn(){
		this.userService.signIn(this.user).subscribe(
			user => this.signInSuccess(user),
			errors => this.signInError(errors)
		);
	}

	signInSuccess(user: User){
		this.router.navigateByUrl('/home');
		
	}

	signInError(errors){

	}
}
