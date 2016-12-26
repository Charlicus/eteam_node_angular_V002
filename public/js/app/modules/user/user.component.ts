import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Flash } from './../../models/flash';

import { FlashService } from '../../services/flash.service';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: './user.component.html'
})

export class UserComponent{


  constructor(
    private spinnerService: SpinnerService,
    private flashService: FlashService,
  ){}
  
}
