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
var access_rights_service_1 = require('../../services/access-rights.service');
var home_component_1 = require('../../components/home/home.component');
var teams_component_1 = require('../../components/teams/teams.component');
var login_component_1 = require('../../components/login/login.component');
var signup_component_1 = require('../../components/signup/signup.component');
var welcome_component_1 = require('../../components/welcome/welcome.component');
var wrong_component_1 = require('../../components/wrong/wrong.component');
var routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent, canActivate: [access_rights_service_1.AccessRightsService] },
    { path: 'teams', component: teams_component_1.TeamsComponent, canActivate: [access_rights_service_1.AccessRightsService] },
    { path: 'login', component: login_component_1.LoginComponent, canActivate: [access_rights_service_1.AccessRightsService] },
    { path: 'signup', component: signup_component_1.SignupComponent, canActivate: [access_rights_service_1.AccessRightsService] },
    { path: 'welcome', component: welcome_component_1.WelcomeComponent, canActivate: [access_rights_service_1.AccessRightsService] },
    { path: '**', component: wrong_component_1.WrongComponent, canActivate: [access_rights_service_1.AccessRightsService] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule],
            providers: [access_rights_service_1.AccessRightsService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map