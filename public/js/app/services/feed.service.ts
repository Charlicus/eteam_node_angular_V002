import { Injectable} from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Feed } from '../models/feed';
import { FeedComment } from '../models/feedComment';

@Injectable()
export class FeedService {
    private feedUrl ='api/feed/';

    constructor(
        private http:Http
    ){}

    public create(feed: Feed): Observable<Feed>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.feedUrl + 'create',feed,options).map(this.extractData).catch(this.handleError);
    }

    public read():Observable<Feed[]>{
        return this.http.get(this.feedUrl + 'read').map(this.extractData).catch(this.handleError);
    }

    public createComment(feedComment: FeedComment): Observable<string>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.feedUrl + 'createComment', feedComment).map(this.extractData).catch(this.handleError);
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