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
var platform_browser_1 = require('@angular/platform-browser');
var app_routing_module_1 = require('./modules/app-routing/app-routing.module');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var angular2_flash_messages_1 = require('angular2-flash-messages');
require('./config/rxjs-operators'); // not sure it's the right location to import it
var app_component_1 = require('./app.component');
var menu_component_1 = require('./components/menu/menu.component');
var home_component_1 = require('./components/home/home.component');
var teams_component_1 = require('./components/teams/teams.component');
var login_component_1 = require('./components/login/login.component');
var sign_in_component_1 = require('./components/sign-in/sign-in.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                angular2_flash_messages_1.FlashMessagesModule
            ],
            declarations: [
                app_component_1.AppComponent,
                menu_component_1.MenuComponent,
                home_component_1.HomeComponent,
                teams_component_1.TeamsComponent,
                login_component_1.LoginComponent,
                sign_in_component_1.SigninComponent
            ],
            bootstrap: [
                app_component_1.AppComponent
            ],
            providers: [
                { provide: http_1.XSRFStrategy, useValue: new http_1.CookieXSRFStrategy('csrf_cookie', 'X-CSRFToken') }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map