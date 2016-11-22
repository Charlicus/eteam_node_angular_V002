import { Injectable } from '@angular/core'

import { FlashMessages } from '../models/flash-messages'

@Injectable()
export class FlashMessagesService {
    flash: (_flashMessages: FlashMessages) => void; // this function is implemented in the flash-messages.component ( See constructor)
}