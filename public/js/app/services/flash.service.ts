import { Injectable } from '@angular/core';
import { Flash } from '../models/flash';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class FlashService {

    // List of messages
    private flashList: Flash[] = [];

    // Observable Source
    private flash = new BehaviorSubject<Flash[]>(this.flashList);

    // Observable Stream
    flash$ = this.flash.asObservable();

    public addFlash(_flash:Flash): void{
        this.flashList.push(_flash);
        this.flash.next(this.flashList);
        this.autoTimeOut(_flash.timeout,_flash);        
    }

    public emptyFlashList(): void{
        this.flashList = [];
        this.flash.next(this.flashList);
    }

    public replaceWithNewFlash(_flash:Flash): void{
        this.emptyFlashList();
        this.addFlash(_flash);
    }

    private autoTimeOut(time: Number,_flash:Flash): void{
        if(time>0) {
            setTimeout(()=>{
                // search for the flash to be removed
                let i = 0;
                while(this.flashList[i] !== _flash && i < this.flashList.length){
                    i++;
                }
                this.flashList.splice(i,1);
                this.flash.next(this.flashList);
            },time);
        }
    }
}