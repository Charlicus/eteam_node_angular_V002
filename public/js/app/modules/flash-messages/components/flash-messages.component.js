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
var flash_messages_service_1 = require('../services/flash-messages.service');
var FlashMessagesComponent = (function () {
    function FlashMessagesComponent(flashMessagesService) {
        this.flashMessagesService = flashMessagesService;
        this.flashMessagesService.flash = this.flash.bind(this);
    }
    FlashMessagesComponent.prototype.flash = function (flashMessages) {
        this.flashMessagesList.push(flashMessages);
        // Need to add set timeout for removing messages
    };
    FlashMessagesComponent.prototype.show = function () {
        return this.flashMessagesList.length > 0;
    };
    FlashMessagesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'flash-messages',
            templateUrl: './flash-messages.component.html',
            providers: [flash_messages_service_1.FlashMessagesService]
        }), 
        __metadata('design:paramtypes', [flash_messages_service_1.FlashMessagesService])
    ], FlashMessagesComponent);
    return FlashMessagesComponent;
}());
exports.FlashMessagesComponent = FlashMessagesComponent;
//# sourceMappingURL=flash-messages.component.js.map