import { Injectable} from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Team } from '../../../models/team';

@Injectable()
export class TeamService {
    private teamUrl ='api/team/';

    constructor(
        private http:Http
    ){}

    public create(team: Team): Observable<Team>{
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers });
        return this.http.post(this.teamUrl + 'create', team, options).map(this.extractData).catch(this.handleError);
    }

    public read():Observable<Team[]>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.teamUrl + 'read',null,options).map(this.extractData).catch(this.handleError);
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
            errorMessages = {type:'danger',messages:['System error: please check your internet connection, if the problem perstis, contact the webmaster ! \n']};
        }
        return Observable.throw(errorMessages);
    }
}