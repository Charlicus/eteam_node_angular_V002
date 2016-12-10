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
//import './config/rxjs-operators';
var team_routing_module_1 = require('./team-routing.module');
var team_component_1 = require('./team.component');
var TeamModule = (function () {
    function TeamModule() {
    }
    TeamModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                team_routing_module_1.TeamRoutingModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                angular2_moment_1.MomentModule
            ],
            declarations: [
                team_component_1.TeamComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TeamModule);
    return TeamModule;
}());
exports.TeamModule = TeamModule;
//# sourceMappingURL=team.module.js.map