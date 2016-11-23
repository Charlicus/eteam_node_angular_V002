import { Injectable } from '@angular/core';
import { Flash } from '../models/flash';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class SpinnerService {
    // Observable Source
    private active = new BehaviorSubject<boolean>(false);
    // Observable Stream
    active$ = this.active.asObservable();

    public start(){
        console.log('goes into start');
        this.active.next(true);
    }

    public stop(){
        this.active.next(false);
    }

    // Add a automatic redirection if spinner never stopped...

}