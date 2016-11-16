import { Injectable } from '@angular/core'
import { Headers, Http} from '@angular/http'

import { User } from '../models/user'

// Import to primise?
// define url for user services?

@Injectable()
export class UserService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private userUrl = '??';

    constructor(private http:Http){}

    signIn(){
        
    }
}