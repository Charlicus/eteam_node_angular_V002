import { Injectable} from '@angular/core'
import { Headers, Http, Response, RequestOptions } from '@angular/http'

import { Observable } from 'rxjs/Observable'

import { User } from '../models/user'

// Import to primise?
// define url for user services?


@Injectable()
export class UserService {
   // private headers = new Headers({'Content-Type': 'application/json'});
    private userUrl = 'api/user/';
    private loggedIn = false;
    private currentUser: User;

    constructor(private http:Http){}


    /**
     * HTTP Call Outs
     */
    public signup(user: User): Observable<User>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.userUrl + 'signup',user , options).map(this.extractData).catch(this.handleError);
    }


    public login(user: User): Observable<User>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.userUrl + 'login' ,user , options).map(this.extractData).catch(this.handleError);
    }

    public logout(): Observable<User>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.userUrl + 'logout',null,options).map(this.extractData).catch(this.handleError);
    }

    public isAuthenticated(): Observable<User>{
        return this.http.get(this.userUrl + 'isAuthenticated').map(this.extractData).catch(this.handleError);
    }

    private extractData(res: Response) {
        return res.json() || {};
    }

    // to be replaced, at least analyzed
    private handleError (error: Response | any): any {
        let errorMessages;
        try{
            if(error instanceof Response){
                try{
                    const messages = [];
                    for(let e of error.json()){
                        messages.push(e.msg);
                    }
                    errorMessages = {type:'warning', messages: messages};
                }
                catch(err){
                    console.log(error);
                    errorMessages = {type:'danger', messages:['System error: please check your internet connection, if the problem persits, contact the webmaster !']};
                }
            }
        }
        catch(err){
            console.log(error);
            errorMessages = {type:'danger',messages:['System error: please check your internet connection, if the problem perstis, contact the webmaster !']};
        }
        return Observable.throw(errorMessages);
    }

    public isLoggedIn(): boolean{
        return this.loggedIn;
    }

    public setLoggedIn(loggedIn: boolean): void{
        this.loggedIn = loggedIn;
    }

    public setCurrentUser(user: User): void{
        this.currentUser = user;
    }

    public getCurrentUser(): User{
        return this.currentUser;
    }
}