import { Injectable } from '@angular/core'
import { Headers, Http, Response, RequestOptions} from '@angular/http'

import { Observable } from 'rxjs/Observable'

import { User } from '../models/user'

// Import to primise?
// define url for user services?


@Injectable()
export class UserService {
   // private headers = new Headers({'Content-Type': 'application/json'});
    private userUrl = 'api/user/';

    constructor(private http:Http){}

    signIn(user: User): Observable<User>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.userUrl + 'signin',user , options).map(this.extractData).catch(this.handleError);
    }


    logIn(user: User): Observable<User>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.userUrl + 'login' ,user , options).map(this.extractData).catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    // be replace with flash errors here?
    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            //errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
            errMsg = err;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
    }
}