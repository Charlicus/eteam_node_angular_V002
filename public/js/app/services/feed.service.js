"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var FeedService = (function () {
    function FeedService(http) {
        this.http = http;
        this.feedUrl = 'api/feed/';
    }
    FeedService.prototype.createFeed = function (feed) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.feedUrl + 'createfeed', feed, options).map(this.extractData).catch(this.handleError);
    };
    FeedService.prototype.extractData = function (res) {
        return res.json() || {};
    };
    // to be replaced, at least analyzed
    FeedService.prototype.handleError = function (error) {
        var errorMessages;
        try {
            if (error instanceof http_1.Response) {
                try {
                    var messages = [];
                    for (var _i = 0, _a = error.json(); _i < _a.length; _i++) {
                        var e = _a[_i];
                        messages.push(e.msg);
                    }
                    errorMessages = { type: 'warning', messages: messages };
                }
                catch (err) {
                    console.log(error);
                    errorMessages = { type: 'danger', messages: ['System error: please check your internet connection, if the problem persits, contact the webmaster !'] };
                }
            }
        }
        catch (err) {
            console.log(error);
            errorMessages = { type: 'danger', messages: ['System error: please check your internet connection, if the problem perstis, contact the webmaster ! \n'] };
        }
        return Observable_1.Observable.throw(errorMessages);
    };
    FeedService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FeedService);
    return FeedService;
}());
exports.FeedService = FeedService;
//# sourceMappingURL=feed.service.js.map