import { Component, OnInit } from '@angular/core';

import { Feed } from '../../models/feed';
import { FeedComment } from '../../models/feedComment';
import { Flash } from '../../models/flash';
import { User } from '../../models/user';

import { FeedService } from '../../services/feed.service';
import { FlashService } from '../../services/flash.service';
import { SpinnerService } from '../../services/spinner.service';
import { UserService } from '../../modules/user/services/user.service';

@Component({
  moduleId: module.id,
  selector: 'wall',
  templateUrl: './wall.component.html'
})

export class WallComponent implements OnInit {
  /* Sample data to be deleted*/
  public feeds: Feed[]=[];

  private newFeed: Feed = new Feed();
  private newFeedComments: FeedComment[] = [];

  constructor(
    private spinnerService: SpinnerService,
    private flashService: FlashService,
    private feedService: FeedService,
    private userService: UserService
  ){}

  public ngOnInit(){
    this.spinnerService.start();
    this.feedService.read().subscribe(
      feeds => {
        for(let feed of feeds){
          // create feedComments for data binding, one by feed for the next comment
          this.newFeedComments[feed._id] = new FeedComment();
        }
        this.feeds = feeds;
        this.spinnerService.stop();
      },
      error => {
        this.flashService.addFlash(new Flash(error.type,error.messages,5000));
        this.spinnerService.stop();
      }
    )
  }

  private createFeed(): void{
    this.spinnerService.start();
    this.feedService.create(this.newFeed).subscribe(
      feed => {
        this.newFeed = new Feed();
        this.ngOnInit(); // maybe not needed to call the server again...
        this.spinnerService.stop();
      },
      error =>{
        this.flashService.replaceWithNewFlash(new Flash(error.type,error.messages,5000));
        this.spinnerService.stop();
      }
    )
  }

  private createComment(feedId: number): void{
    this.spinnerService.start();
    let newFeedComment: FeedComment = this.newFeedComments[feedId];
    newFeedComment._feedId = feedId;
    this.feedService.createComment(newFeedComment).subscribe(
      status =>{
        this.ngOnInit();
        this.spinnerService.stop();
      },
      error =>{
        this.flashService.replaceWithNewFlash(new Flash(error.type,error.messages,5000));
        this.spinnerService.stop();
      }
    )
  }

  private currentUser(): User{
    return this.userService.getCurrentUser()
  }
}
