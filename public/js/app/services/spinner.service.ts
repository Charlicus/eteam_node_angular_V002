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
        this.active.next(true);
    }

    public stop(){
        this.active.next(false);
    }

    // Add a automatic redirection to log out with flash errors if spinner never stopped...

}