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
  public feeds: Feed[]=[];

  private newFeed: Feed = new Feed();
  private newComments = [];

  constructor(
    private spinnerService: SpinnerService,
    private flashService: FlashService,
    private feedService: FeedService
  ){}

  public ngOnInit(){
    this.spinnerService.start();
    this.feedService.read().subscribe(
      feeds => {
        for(let feed of feeds){
          this.newComments[feed._id] = {msg:''};
        }
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
        this.ngOnInit();
        this.spinnerService.stop();
      },
      error =>{
        this.flashService.replaceWithNewFlash(new Flash(error.type,error.messages,5000));
        this.spinnerService.stop();
      }
    )
  }

  private createComment(feedId: number): void{
    console.log(feedId);
    console.log(this.newComments[feedId]);
  }
}
