import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Team } from './../../../models/team';
import { Flash } from './../../../models/flash';

import { TeamService } from './../../../services/team.service';
import { FlashService } from '../../../services/flash.service';


import { SpinnerService } from '../../../services/spinner.service';

@Component({
  moduleId: module.id,
  selector: 'team',
  templateUrl: './team.component.html'
})

export class TeamComponent implements OnInit{
  private team: Team = new Team() ;


  constructor(
    private spinnerService: SpinnerService,
    private flashService: FlashService,
    private teamService: TeamService,
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.spinnerService.start();
    this.route.params
      .switchMap((params: Params) => this.teamService.read(params['name']))
      .subscribe(
        team => {
          this.team = team;
          this.spinnerService.stop();
        },
        error => {
          this.flashService.addFlash(new Flash(error.type,error.messages,5000));
          this.spinnerService.stop();
        }
    )
  }
}
