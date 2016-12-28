import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Team } from './../../../models/team';
import { Member } from './../../../models/member';
import { Flash } from './../../../models/flash';

import { TeamService } from './../../../services/team.service'

import { FlashService } from './../../../services/flash.service';
import { SpinnerService } from './../../../services/spinner.service';


@Component({
  moduleId: module.id,
  selector: 'create-team',
  templateUrl: './create-team.component.html'
})

export class CreateTeamComponent {
  private team: Team = new Team();
  private member: Member = new Member();
  private sports: String[] = [
    'Field Hockey',
    'Football',
    'Golf',
    'Other'
  ];
  private roles: String[] = [
    'Coach',
    'Player',
    'Fan'
  ];

  constructor(
    private spinnerService: SpinnerService,
    private flashService: FlashService,
    private teamService: TeamService,
    private router: Router
  ){}

  public createTeam(): void{
    this.spinnerService.start();
    var data = {team: this.team, member: this.member};
    this.teamService.create(data).subscribe(
      team => {
        this.flashService.replaceWithNewFlash(new Flash('success',['You successfully created a new team, congratulation !'],3500));
        this.router.navigate(['/team/'+team.url]);
        this.spinnerService.stop();
    },
      error => {
        this.flashService.replaceWithNewFlash(new Flash(error.type, error.messages,5000));
        this.spinnerService.stop();
      }
    )
  }
}
