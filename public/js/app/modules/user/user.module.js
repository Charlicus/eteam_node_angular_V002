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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var angular2_moment_1 = require('angular2-moment');
var shared_module_1 = require('./../shared/shared.module');
var user_routing_module_1 = require('./user-routing.module');
var login_component_1 = require('./components/login.component');
var signup_component_1 = require('./components/signup.component');
var profile_component_1 = require('./components/profile.component');
var wall_component_1 = require('./../../components/wall/wall.component');
var UserModule = (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                user_routing_module_1.UserRoutingModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                angular2_moment_1.MomentModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                login_component_1.LoginComponent,
                signup_component_1.SignupComponent,
                profile_component_1.ProfileComponent,
                wall_component_1.WallComponent
            ],
            providers: [
                { provide: http_1.XSRFStrategy, useValue: new http_1.CookieXSRFStrategy('csrf_cookie', 'X-CSRFToken') },
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map