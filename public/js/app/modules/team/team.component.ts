import { Component, OnInit } from '@angular/core';

import { Team } from './../../models/team';
import { Flash } from './../../models/flash';

import { TeamService } from './services/team.service';
import { FlashService } from '../../services/flash.service';


import { SpinnerService } from '../../services/spinner.service';

@Component({
  moduleId: module.id,
  selector: 'team',
  templateUrl: './team.component.html'
})

export class TeamComponent implements OnInit{
  public teams: Team[]=[];

  constructor(
    private spinnerService: SpinnerService,
    private flashService: FlashService,
    private teamService: TeamService
  ){}

  ngOnInit(){
    this.spinnerService.start();
    this.teamService.read().subscribe(
      teams => {
        this.teams = teams;
        this.spinnerService.stop();
      },
      error => {
        this.flashService.addFlash(new Flash(error.type,error.messages,5000));
        this.spinnerService.stop();
      }
    )
    // Get all teams
  }
}
