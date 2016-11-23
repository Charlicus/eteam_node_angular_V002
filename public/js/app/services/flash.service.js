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
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var FlashService = (function () {
    function FlashService() {
        // List of messages
        this.flashList = [];
        // Observable Source
        this.flash = new BehaviorSubject_1.BehaviorSubject(this.flashList);
        // Observable Stream
        this.flash$ = this.flash.asObservable();
    }
    FlashService.prototype.addFlash = function (_flash) {
        this.flashList.push(_flash);
        this.flash.next(this.flashList);
        this.autoTimeOut(_flash.timeout);
    };
    FlashService.prototype.emptyFlashList = function () {
        this.flashList = [];
        this.flash.next(this.flashList);
    };
    FlashService.prototype.replaceWithNewFlash = function (_flash) {
        this.flashList = [_flash];
        this.flash.next(this.flashList);
        this.autoTimeOut(_flash.timeout);
    };
    FlashService.prototype.autoTimeOut = function (time) {
        var _this = this;
        if (time > 0) {
            setTimeout(function () {
                _this.emptyFlashList();
            }, time);
        }
    };
    FlashService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FlashService);
    return FlashService;
}());
exports.FlashService = FlashService;
//# sourceMappingURL=flash.service.js.map