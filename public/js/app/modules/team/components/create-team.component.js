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
var team_1 = require('./../../../models/team');
var flash_1 = require('./../../../models/flash');
var team_service_1 = require('./../../../services/team.service');
var flash_service_1 = require('../../../services/flash.service');
var spinner_service_1 = require('../../../services/spinner.service');
var CreateTeamComponent = (function () {
    function CreateTeamComponent(spinnerService, flashService, teamService) {
        this.spinnerService = spinnerService;
        this.flashService = flashService;
        this.teamService = teamService;
        this.newTeam = new team_1.Team();
        this.sports = [
            'Field Hockey',
            'Football',
            'Golf',
            'Other'
        ];
    }
    CreateTeamComponent.prototype.createTeam = function () {
        var _this = this;
        this.spinnerService.start();
        this.teamService.create(this.newTeam).subscribe(function (team) {
            _this.flashService.replaceWithNewFlash(new flash_1.Flash('success', ['You successfully created a new team, congratulation !'], 3500));
            _this.spinnerService.stop();
        }, function (error) {
            _this.flashService.replaceWithNewFlash(new flash_1.Flash(error.type, error.messages, 5000));
            _this.spinnerService.stop();
        });
    };
    CreateTeamComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'create-team',
            templateUrl: './create-team.component.html'
        }), 
        __metadata('design:paramtypes', [spinner_service_1.SpinnerService, flash_service_1.FlashService, team_service_1.TeamService])
    ], CreateTeamComponent);
    return CreateTeamComponent;
}());
exports.CreateTeamComponent = CreateTeamComponent;
//# sourceMappingURL=create-team.component.js.map