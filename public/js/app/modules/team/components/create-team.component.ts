import { Component } from '@angular/core';

import { Team } from '../../../models/team'

@Component({
  moduleId: module.id,
  selector: 'create-team',
  templateUrl: './create-team.component.html'
})

export class CreateTeamComponent {
  private team: Team = new Team();

  public createTeam(): void{
    console.log('Create Team');
  }
}