import { Component } from '@angular/core';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service'



// Import RJX Operators

@Component({
  moduleId: module.id,
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  providers: [UserService]
})

export class SigninComponent {
	private user: User = new User();
	private flash;

	constructor(private userService: UserService) {}

	signIn(){
		this.userService.signIn(this.user).subscribe(
			user => this.signInSuccess(user),
			errors => this.signInError(errors)
		);
	}

	signInSuccess(user: User){
		this.flash = {'type': 'success','messages': [{'msg': 'You successfully signed-in !'}]};
		
	}

	signInError(errors){
		this.flash = {'type': 'warning','messages': JSON.parse(errors)};
	}


}
