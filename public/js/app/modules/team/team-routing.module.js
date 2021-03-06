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
//import { AccessRightsService }      from '../../services/access-rights.service';
var create_team_component_1 = require('./components/create-team.component');
var search_team_component_1 = require('./components/search-team.component');
var team_component_1 = require('./components/team.component');
var routes = [
    { path: '', redirectTo: '/team/all', pathMatch: 'full' },
    { path: 'all', component: search_team_component_1.SearchTeamComponent },
    { path: 'create', component: create_team_component_1.CreateTeamComponent },
    { path: ':name', component: team_component_1.TeamComponent }
];
var TeamRoutingModule = (function () {
    function TeamRoutingModule() {
    }
    TeamRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], TeamRoutingModule);
    return TeamRoutingModule;
}());
exports.TeamRoutingModule = TeamRoutingModule;
//# sourceMappingURL=team-routing.module.js.map