import { Component } from '@angular/core';

import { User } from '../../models/user';


// Import RJX Operators

@Component({
  moduleId: module.id,
  selector: 'sign-in',
  templateUrl: './sign-in.component.html'
})

export class SigninComponent {
	private user: User = new User();

	signIn(){
		// this function should call a new user service component
		console.log(this.user);
	}
}
