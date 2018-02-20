"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_providers_1 = require("./app.providers");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var shared_1 = require("./shared");
var home_module_1 = require("./home/home.module");
var place_service_1 = require("./place.service");
var details_component_1 = require("./details/details.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                details_component_1.DetailsComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                shared_1.NavbarModule,
                home_module_1.HomeModule,
                forms_1.FormsModule,
                app_routing_1.routing
            ],
            providers: [app_providers_1.APP_PROVIDERS, app_routing_1.appRoutingProviders, place_service_1.PlaceService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDhEQUEwRDtBQUMxRCx3Q0FBNkM7QUFJN0MsaURBQWdEO0FBQ2hELGlEQUErQztBQUMvQyw2Q0FBNkQ7QUFDN0QsbUNBQXdDO0FBQ3hDLGtEQUFnRDtBQUVoRCxpREFBK0M7QUFDL0MsaUVBQStEO0FBaUIvRDtJQUFBO0lBQ0EsQ0FBQztJQURZLFNBQVM7UUFmckIsZUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLG9DQUFnQjthQUNuQjtZQUNELE9BQU8sRUFBRTtnQkFDTCxnQ0FBYTtnQkFDYixxQkFBWTtnQkFDWix3QkFBVTtnQkFDVixtQkFBVztnQkFDWCxxQkFBTzthQUNWO1lBQ0QsU0FBUyxFQUFFLENBQUUsNkJBQWEsRUFBRSxpQ0FBbUIsRUFBRSw0QkFBWSxDQUFFO1lBQy9ELFNBQVMsRUFBRSxDQUFFLDRCQUFZLENBQUU7U0FDOUIsQ0FBQztPQUNXLFNBQVMsQ0FDckI7SUFBRCxnQkFBQztDQURELEFBQ0MsSUFBQTtBQURZLDhCQUFTIiwiZmlsZSI6ImFwcC9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5cbmltcG9ydCB7IEFQUF9QUk9WSURFUlMgfSBmcm9tICcuL2FwcC5wcm92aWRlcnMnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IGFwcFJvdXRpbmdQcm92aWRlcnMsIHJvdXRpbmcgfSBmcm9tICcuL2FwcC5yb3V0aW5nJztcbmltcG9ydCB7IE5hdmJhck1vZHVsZSB9IGZyb20gJy4vc2hhcmVkJztcbmltcG9ydCB7IEhvbWVNb2R1bGUgfSBmcm9tICcuL2hvbWUvaG9tZS5tb2R1bGUnO1xuXG5pbXBvcnQgeyBQbGFjZVNlcnZpY2UgfSBmcm9tICcuL3BsYWNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgRGV0YWlsc0NvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBCcm93c2VyTW9kdWxlLFxuICAgICAgICBOYXZiYXJNb2R1bGUsXG4gICAgICAgIEhvbWVNb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICByb3V0aW5nXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFsgQVBQX1BST1ZJREVSUywgYXBwUm91dGluZ1Byb3ZpZGVycywgUGxhY2VTZXJ2aWNlIF0sXG4gICAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG59XG4iXX0=
