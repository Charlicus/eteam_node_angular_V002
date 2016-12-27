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
var feed_1 = require('../../models/feed');
var feedComment_1 = require('../../models/feedComment');
var flash_1 = require('../../models/flash');
var feed_service_1 = require('../../services/feed.service');
var flash_service_1 = require('../../services/flash.service');
var spinner_service_1 = require('../../services/spinner.service');
var user_service_1 = require('../../modules/user/services/user.service');
var WallComponent = (function () {
    function WallComponent(spinnerService, flashService, feedService, userService) {
        this.spinnerService = spinnerService;
        this.flashService = flashService;
        this.feedService = feedService;
        this.userService = userService;
        /* Sample data to be deleted*/
        this.feeds = [];
        this.newFeed = new feed_1.Feed();
        this.newFeedComments = [];
    }
    WallComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.start();
        this.feedService.read().subscribe(function (feeds) {
            for (var _i = 0, feeds_1 = feeds; _i < feeds_1.length; _i++) {
                var feed = feeds_1[_i];
                // create feedComments for data binding, one by feed for the next comment
                _this.newFeedComments[feed._id] = new feedComment_1.FeedComment();
            }
            _this.feeds = feeds;
            _this.spinnerService.stop();
        }, function (error) {
            _this.flashService.addFlash(new flash_1.Flash(error.type, error.messages, 5000));
            _this.spinnerService.stop();
        });
    };
    WallComponent.prototype.createFeed = function () {
        var _this = this;
        this.spinnerService.start();
        this.feedService.create(this.newFeed).subscribe(function (feed) {
            _this.newFeed = new feed_1.Feed();
            _this.ngOnInit(); // maybe not needed to call the server again...
            _this.spinnerService.stop();
        }, function (error) {
            _this.flashService.replaceWithNewFlash(new flash_1.Flash(error.type, error.messages, 5000));
            _this.spinnerService.stop();
        });
    };
    WallComponent.prototype.createComment = function (feedId) {
        var _this = this;
        this.spinnerService.start();
        var newFeedComment = this.newFeedComments[feedId];
        newFeedComment._feedId = feedId;
        this.feedService.createComment(newFeedComment).subscribe(function (status) {
            _this.ngOnInit();
            _this.spinnerService.stop();
        }, function (error) {
            _this.flashService.replaceWithNewFlash(new flash_1.Flash(error.type, error.messages, 5000));
            _this.spinnerService.stop();
        });
    };
    WallComponent.prototype.currentUser = function () {
        return this.userService.getCurrentUser();
    };
    WallComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wall',
            templateUrl: './wall.component.html'
        }), 
        __metadata('design:paramtypes', [spinner_service_1.SpinnerService, flash_service_1.FlashService, feed_service_1.FeedService, user_service_1.UserService])
    ], WallComponent);
    return WallComponent;
}());
exports.WallComponent = WallComponent;
//# sourceMappingURL=wall.component.js.map