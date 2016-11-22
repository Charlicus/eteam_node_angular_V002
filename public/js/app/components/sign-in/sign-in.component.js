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
var user_1 = require('../../models/user');
var user_service_1 = require('../../services/user.service');
// Import RJX Operators
var SigninComponent = (function () {
    function SigninComponent(userService) {
        this.userService = userService;
        this.user = new user_1.User();
    }
    SigninComponent.prototype.signIn = function () {
        var _this = this;
        this.userService.signIn(this.user).subscribe(function (user) { return _this.signInSuccess(user); }, function (errors) { return _this.signInError(errors); });
    };
    SigninComponent.prototype.signInSuccess = function (user) {
        this.flash = { 'type': 'success', 'messages': [{ 'msg': 'You successfully signed-in !' }] };
    };
    SigninComponent.prototype.signInError = function (errors) {
        this.flash = { 'type': 'warning', 'messages': JSON.parse(errors) };
    };
    SigninComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sign-in',
            templateUrl: './sign-in.component.html',
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=sign-in.component.js.map