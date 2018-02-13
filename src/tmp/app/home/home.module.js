"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var index_1 = require("./index");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var truncate_pipe_1 = require("../shared/truncate.pipe");
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule],
            declarations: [
                index_1.HomeComponent, truncate_pipe_1.TruncatePipe
            ],
            exports: [
                index_1.HomeComponent
            ]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLHNDQUEyQztBQUMzQyw4REFBMEQ7QUFFMUQsaUNBQXdDO0FBR3hDLHdDQUE2QztBQUM3QywwQ0FBK0M7QUFDL0MseURBQXVEO0FBV3ZEO0lBQUE7SUFDQSxDQUFDO0lBRFksVUFBVTtRQVR0QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBRSxnQ0FBYSxFQUFFLG1CQUFXLEVBQUUsaUJBQVUsRUFBRSxxQkFBWSxDQUFDO1lBQ2hFLFlBQVksRUFBRTtnQkFDVixxQkFBYSxFQUFFLDRCQUFZO2FBQzlCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHFCQUFhO2FBQ2hCO1NBQ0osQ0FBQztPQUNXLFVBQVUsQ0FDdEI7SUFBRCxpQkFBQztDQURELEFBQ0MsSUFBQTtBQURZLGdDQUFVIiwiZmlsZSI6ImFwcC9ob21lL2hvbWUubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBQbGFjZSB9IGZyb20gJy4uL3BsYWNlJztcbmltcG9ydCB7IFBsYWNlU2VydmljZSB9IGZyb20gXCIuLi9wbGFjZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBUcnVuY2F0ZVBpcGUgfSBmcm9tICcuLi9zaGFyZWQvdHJ1bmNhdGUucGlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogWyBCcm93c2VyTW9kdWxlLCBGb3Jtc01vZHVsZSwgSHR0cE1vZHVsZSwgUm91dGVyTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgSG9tZUNvbXBvbmVudCwgVHJ1bmNhdGVQaXBlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIEhvbWVDb21wb25lbnRcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVNb2R1bGUge1xufVxuIl19
