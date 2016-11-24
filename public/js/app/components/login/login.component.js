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
var user_1 = require('../../models/user');
var flash_1 = require('../../models/flash');
var user_service_1 = require('../../services/user.service');
var flash_service_1 = require('../../services/flash.service');
var spinner_service_1 = require('../../services/spinner.service');
var LoginComponent = (function () {
    function LoginComponent(userService, flashService, spinnerService, router) {
        this.userService = userService;
        this.flashService = flashService;
        this.spinnerService = spinnerService;
        this.router = router;
        //private user: User = new User();
        this.user = new user_1.User(0, 'charlicus@hotmail.com', 'charlicus', 'aaaaaa', 'aaaaaa'); // to be removed for testing only
    }
    LoginComponent.prototype.logIn = function () {
        var _this = this;
        this.spinnerService.start();
        this.userService.logIn(this.user).subscribe(function (user) { return _this.logInSuccess(user); }, function (errors) { return _this.logInError(errors); });
    };
    LoginComponent.prototype.logInSuccess = function (user) {
        this.flashService.replaceWithNewFlash(new flash_1.Flash('success', ["You successfully logged in, Welcome Back !"], 3500));
        this.userService.setLoggedIn(true);
        this.router.navigate(['/home']);
        this.spinnerService.stop();
    };
    LoginComponent.prototype.logInError = function (errors) {
        var errorMessages = [];
        for (var _i = 0, _a = JSON.parse(errors); _i < _a.length; _i++) {
            var error = _a[_i];
            errorMessages.push(error.msg);
        }
        this.flashService.replaceWithNewFlash(new flash_1.Flash('warning', errorMessages, 5000));
        this.spinnerService.stop();
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: './login.component.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, flash_service_1.FlashService, spinner_service_1.SpinnerService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map