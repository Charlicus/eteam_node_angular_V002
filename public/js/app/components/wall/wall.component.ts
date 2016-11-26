import { Component, OnInit } from '@angular/core';

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

export class WallComponent implements OnInit {
  /* Sample data to be deleted*/
  public feeds: Feed[]=[
    new Feed(null,1,'Hello you, how are you?',[{msg:'good and you?',_creator:2},{msg:'not that well',_creator:1}]),
    new Feed(null,1,'Hello you, how are you?',[{msg:'good and you?',_creator:2},{msg:'not that well',_creator:1}]),
    new Feed(null,1,'Hello you, how are you?',[{msg:'good and you?',_creator:2},{msg:'not that well',_creator:1}])
  ];

  private newFeed: Feed = new Feed();

  constructor(
    private spinnerService: SpinnerService,
    private flashService: FlashService,
    private feedService: FeedService
  ){}

  public ngOnInit(){
    this.spinnerService.start();
    this.feedService.read().subscribe(
      feeds => {
        this.feeds = feeds;
        this.spinnerService.stop();
      },
      error => {
        this.flashService.addFlash(new Flash(error.type,error.messages,5000));
      }
    )
  }

  private createFeed(): void{
    this.spinnerService.start();
    this.feedService.create(this.newFeed).subscribe(
      feed => {
        this.feeds.push(feed);
        this.spinnerService.stop();
      },
      error =>{
        this.flashService.replaceWithNewFlash(new Flash(error.type,error.messages,5000));
        this.spinnerService.stop();
      }
    )
  }
}
