import { Component } from '@angular/core';

import { FlashMessages } from '../models/flash-messages';
import { FlashMessagesService } from '../services/flash-messages.service'

@Component({
  moduleId: module.id,
  selector: 'flash-messages',
  templateUrl: './flash-messages.component.html',
  providers: [ FlashMessagesService]
})

export class FlashMessagesComponent{
    public flashMessagesList: FlashMessages[];

    constructor(private flashMessagesService: FlashMessagesService){
        this.flashMessagesService.flash = this.flash.bind(this);
    }

    flash(flashMessages: FlashMessages){
        this.flashMessagesList.push(flashMessages);
        // Need to add set timeout for removing messages
    }

    show(){
        return this.flashMessagesList.length > 0;
    }

}