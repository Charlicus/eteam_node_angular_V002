import { Component } from '@angular/core';

import { Feed } from '../../models/feed';
import { Flash } from '../../models/flash';

import { FeedService } from '../../services/feed.service';
import { FlashService } from '../../services/flash.service';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  moduleId: module.id,
  selector: 'wall',
  templateUrl: './wall.component.html'
})

export class WallComponent {
  /* Sample data to be deleted*/
  public feeds=[
    {
      msg:'First Message irst Comment Hello Manon Comment tu vas tois ça va oy',
      comments:[
        {msg:'First Comment Hello Manon Comment tu vas tois ça va oyou'},
        {msg:'Second Comment irst Comment Hello Manon Comment tu vas tois ça va oy'}
      ]
    },
    {
      msg:'Second Message',
      comments:[
        {msg:'First Comment'},
        {msg:'Second Comment'}
      ]
    }
  ];

  private newFeed: Feed = new Feed();

  constructor(
    private spinnerService: SpinnerService,
    private flashService: FlashService,
    private feedService: FeedService
  ){}

  private postNewFeed(): void{
    this.spinnerService.start();
    this.feedService.createFeed(this.newFeed).subscribe(
      feed => {
        console.log('success');
        this.spinnerService.stop();
      },
      errors =>{
        console.log('error is postNewFeed');
        this.spinnerService.stop();
      }
    )
  }
}
