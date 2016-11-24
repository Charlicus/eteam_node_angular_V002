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
var router_1 = require('@angular/router');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/Observable/of');
var user_service_1 = require('./user.service');
var spinner_service_1 = require('./spinner.service');
var flash_service_1 = require('./flash.service');
var flash_1 = require('../models/flash');
var AccessRightsService = (function () {
    function AccessRightsService(userService, spinnerService, flashService, router) {
        this.userService = userService;
        this.spinnerService = spinnerService;
        this.flashService = flashService;
        this.router = router;
    }
    AccessRightsService.prototype.canActivate = function (next, state) {
        var _this = this;
        this.spinnerService.start();
        return this.userService.isAuthenticated().map(function (user) {
            _this.spinnerService.stop();
            _this.userService.setLoggedIn(true);
            _this.userService.setCurrentUser(user);
            return true;
        }).catch(function (errors) {
            _this.spinnerService.stop();
            _this.userService.setLoggedIn(false);
            // Don't redircect if not logged in for some of the routes
            switch (state.url) {
                case '/signup': return Observable_1.Observable.of(true);
                case '/login': return Observable_1.Observable.of(true);
                case '/welcome': return Observable_1.Observable.of(true);
                default:
                    _this.flashService.replaceWithNewFlash(new flash_1.Flash('warning', ['Please log in to see this page'], 3500));
                    _this.router.navigate(['login']);
                    return Observable_1.Observable.of(false);
            }
        });
    };
    AccessRightsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [user_service_1.UserService, spinner_service_1.SpinnerService, flash_service_1.FlashService, router_1.Router])
    ], AccessRightsService);
    return AccessRightsService;
}());
exports.AccessRightsService = AccessRightsService;
//# sourceMappingURL=access-rights.service.js.map