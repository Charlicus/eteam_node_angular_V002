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
var FlashComponent = (function () {
    function FlashComponent() {
    }
    FlashComponent.prototype.setClasses = function () {
        var classes = {
            'alert': true,
            'alert-warning': this.info.type == 'warning',
            'alert-success': this.info.type == 'success',
            'alert-info': this.info.type == 'info',
            'alert-danger': this.info.type == 'danger'
        };
        return classes;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FlashComponent.prototype, "info", void 0);
    FlashComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'flash',
            templateUrl: './flash.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FlashComponent);
    return FlashComponent;
}());
exports.FlashComponent = FlashComponent;
//# sourceMappingURL=flash.component.js.map