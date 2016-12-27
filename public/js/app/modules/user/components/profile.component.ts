import { Component} from '@angular/core';

import { User }        from '../../../models/user'
import { UserService } from '../services/user.service'

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: './profile.component.html'
})

export class ProfileComponent{

    constructor(private userService: UserService){}

    private currentUser(): User{
        return this.userService.getCurrentUser();
    }
}
