import { Component} from '@angular/core';
import { Router } from '@angular/router';

import { Flash } from '../../models/flash';
import { UserService } from '../../services/user.service';
import { FlashService } from '../../services/flash.service';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  moduleId: module.id,
  selector: 'main-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['menu.component.css']
})
export class MenuComponent{

  constructor(
    private userService: UserService,
    private flashService: FlashService,
    private spinnerService: SpinnerService,
    private router: Router
  ){}

  private isLoggedIn(): boolean{
    return this.userService.isLoggedIn();
  }

  private logout(): void{
    this.userService.logout().subscribe(
      user => this.logoutSuccess(),
      errors => this.logoutError(errors)
    );
  }

  private logoutSuccess(): void{
    this.flashService.replaceWithNewFlash(new Flash('success',['You logged out, see you soon !'],3500));
    this.userService.setLoggedIn(false);
    this.router.navigate(['welcome']);
  }
  
  private logoutError(errors): void{
    let errorMessages:string[]=[];
    for(let error of JSON.parse(errors)){
      errorMessages.push(error.msg);
    }
    this.flashService.addFlash(new Flash('alert',errorMessages,5000));
    this.spinnerService.stop();
  }
}