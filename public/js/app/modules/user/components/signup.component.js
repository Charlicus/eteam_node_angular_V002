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
var user_1 = require('../../../models/user');
var flash_1 = require('../../../models/flash');
var user_service_1 = require('../services/user.service');
var flash_service_1 = require('../../../services/flash.service');
var spinner_service_1 = require('../../../services/spinner.service');
var SignupComponent = (function () {
    function SignupComponent(userService, flashService, spinnerService, router) {
        this.userService = userService;
        this.flashService = flashService;
        this.spinnerService = spinnerService;
        this.router = router;
        //private user: User = new User();
        this.user = new user_1.User(0, 'charlicus@hotmail.com', 'charlicus', 'aaaaaa', 'aaaaaa'); // to be removed for testing only
    }
    SignupComponent.prototype.signup = function () {
        var _this = this;
        this.spinnerService.start();
        this.userService.signup(this.user).subscribe(function (user) { return _this.signupSuccess(user); }, function (error) { return _this.signupError(error); });
    };
    SignupComponent.prototype.signupSuccess = function (user) {
        this.flashService.replaceWithNewFlash(new flash_1.Flash('success', ['You successfully signed up, Welcome !'], 3500));
        this.userService.setLoggedIn(true);
        this.userService.setCurrentUser(user);
        this.router.navigate(['home']);
        this.spinnerService.stop();
    };
    SignupComponent.prototype.signupError = function (error) {
        this.flashService.replaceWithNewFlash(new flash_1.Flash(error.type, error.messages, 5000));
        this.spinnerService.stop();
    };
    SignupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'signup',
            templateUrl: './signup.component.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, flash_service_1.FlashService, spinner_service_1.SpinnerService, router_1.Router])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map