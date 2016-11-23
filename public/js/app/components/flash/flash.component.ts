import { Component, OnInit} from '@angular/core';

import { Flash } from '../../models/flash';
import { FlashService } from '../../services/flash.service'

@Component({
  moduleId: module.id,
  selector: 'flash',
  templateUrl: './flash.component.html'
})

export class FlashComponent implements OnInit{
    public flashList: Flash[];
    constructor(private flashService: FlashService){

    }
    ngOnInit(): void {
        this.flashService.flash$.subscribe(flashList => this.flashList = flashList);
    }

    show(): boolean{
        return this.flashList.length>0;
    }
}