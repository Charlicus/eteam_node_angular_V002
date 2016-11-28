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
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var angular2_moment_1 = require('angular2-moment');
require('./config/rxjs-operators');
var app_routing_module_1 = require('./modules/app-routing/app-routing.module');
var flash_service_1 = require('./services/flash.service');
var spinner_service_1 = require('./services/spinner.service');
var user_service_1 = require('./services/user.service');
var feed_service_1 = require('./services/feed.service');
var capitalize_pipe_1 = require('./pipes/capitalize.pipe');
var app_component_1 = require('./app.component');
var home_component_1 = require('./components/home/home.component');
var teams_component_1 = require('./components/teams/teams.component');
var login_component_1 = require('./components/login/login.component');
var signup_component_1 = require('./components/signup/signup.component');
var welcome_component_1 = require('./components/welcome/welcome.component');
var profile_component_1 = require('./components/profile/profile.component');
var wall_component_1 = require('./components/wall/wall.component');
var menu_component_1 = require('./components/menu/menu.component');
var flash_component_1 = require('./components/flash/flash.component');
var spinner_component_1 = require('./components/spinner/spinner.component');
var wrong_component_1 = require('./components/wrong/wrong.component');
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
                angular2_moment_1.MomentModule
            ],
            declarations: [
                app_component_1.AppComponent,
                menu_component_1.MenuComponent,
                home_component_1.HomeComponent,
                teams_component_1.TeamsComponent,
                login_component_1.LoginComponent,
                signup_component_1.SignupComponent,
                flash_component_1.FlashComponent,
                spinner_component_1.SpinnerComponent,
                welcome_component_1.WelcomeComponent,
                wrong_component_1.WrongComponent,
                profile_component_1.ProfileComponent,
                wall_component_1.WallComponent,
                capitalize_pipe_1.CapitalizePipe
            ],
            bootstrap: [
                app_component_1.AppComponent
            ],
            providers: [
                { provide: http_1.XSRFStrategy, useValue: new http_1.CookieXSRFStrategy('csrf_cookie', 'X-CSRFToken') },
                flash_service_1.FlashService,
                spinner_service_1.SpinnerService,
                user_service_1.UserService,
                feed_service_1.FeedService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map