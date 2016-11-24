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
        this.autoTimeOut(_flash.timeout);        
    }

    public emptyFlashList(): void{
        this.flashList = [];
        this.flash.next(this.flashList);
    }

    public replaceWithNewFlash(_flash:Flash): void{
        this.flashList = [_flash];
        this.flash.next(this.flashList);
        this.autoTimeOut(_flash.timeout);
    }

    private autoTimeOut(time: Number): void{
        if(time>0) {
            setTimeout(()=>{
                this.emptyFlashList();
            },time);
        }
    }
}