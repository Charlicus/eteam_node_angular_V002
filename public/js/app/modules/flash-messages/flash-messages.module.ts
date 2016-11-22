import { NgModule }             from '@angular/core';

import { FlashMessagesComponent }   from './components/flash-messages.component';
import { FlashMessagesService }     from './services/flash-messages.service'

@NgModule({
    declarations: [FlashMessagesComponent],
    providers: [FlashMessagesService]
})

export class FlashMessagesModule {}