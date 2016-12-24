import { Component } from '@angular/core';

import { Team } from './../../../models/team';
import { Flash } from './../../../models/flash';

import { TeamService } from './../services/team.service'

import { FlashService } from '../../../services/flash.service';
import { SpinnerService } from '../../../services/spinner.service';


@Component({
  moduleId: module.id,
  selector: 'create-team',
  templateUrl: './create-team.component.html'
})

export class CreateTeamComponent {
  private newTeam: Team = new Team();

  constructor(
    private spinnerService: SpinnerService,
    private flashService: FlashService,
    private teamService: TeamService
  ){}

  public createTeam(): void{
    this.spinnerService.start();
    this.teamService.create(this.newTeam).subscribe(
      team => {
        this.flashService.replaceWithNewFlash(new Flash('success',['You successfully created a new team, congratulation !'],3500));
        this.spinnerService.stop();
    },
      error => {
        this.flashService.replaceWithNewFlash(new Flash(error.type, error.messages,5000));
        this.spinnerService.stop();
      }
    )
  }
}
