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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var place_service_1 = require("../place.service");
var router_1 = require("@angular/router");
var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(route, placeService, router) {
        this.route = route;
        this.placeService = placeService;
        this.router = router;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            _this.queryVal = params['query'];
        });
        this.sub = this.route.params.subscribe(function (params) {
            _this.currentPage = params['currentPage'];
            var id = params['id'];
            _this.placeService
                .get(id)
                .subscribe(function (p) { return _this.place = p; });
        });
    };
    DetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    DetailsComponent.prototype.gotoList = function () {
        this.router.navigate(['pages', this.currentPage], { queryParams: { query: this.queryVal } });
    };
    DetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-details',
            templateUrl: './details.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            place_service_1.PlaceService,
            router_1.Router])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTZEO0FBQzdELGtEQUFnRDtBQUVoRCwwQ0FBaUU7QUFTakU7SUFPRSwwQkFBb0IsS0FBcUIsRUFDckIsWUFBMEIsRUFDMUIsTUFBYztRQUZkLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRyxDQUFDO0lBRXRDLG1DQUFRLEdBQVI7UUFBQSxpQkFlQztRQWJDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVzthQUNqQixTQUFTLENBQ04sVUFBQyxNQUFjO1lBQ1gsS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUNKLENBQUM7UUFDTixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDMUMsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDMUMsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxZQUFZO2lCQUNkLEdBQUcsQ0FBQyxFQUFFLENBQUM7aUJBQ1AsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQWQsQ0FBYyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBbENVLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsTUFBTSxFQUFFLEVBQUU7U0FDWCxDQUFDO3lDQVEyQix1QkFBYztZQUNQLDRCQUFZO1lBQ2xCLGVBQU07T0FUdkIsZ0JBQWdCLENBb0M1QjtJQUFELHVCQUFDO0NBcENELEFBb0NDLElBQUE7QUFwQ1ksNENBQWdCIiwiZmlsZSI6ImFwcC9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhY2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3BsYWNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFBsYWNlIH0gZnJvbSBcIi4uL3BsYWNlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTG93ZXJjYXNlUGlwZSB9IGZyb20gJy4uL3NoYXJlZC9sb3dlcmNhc2UucGlwZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1kZXRhaWxzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHBsYWNlOiBQbGFjZTtcbiAgc3ViOmFueTtcbiAgY3VycmVudFBhZ2U6IG51bWJlcjtcbiAgcHJldmlvdXNVcmw6IHN0cmluZztcbiAgcXVlcnlWYWw6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBwbGFjZVNlcnZpY2U6IFBsYWNlU2VydmljZSwgICAgIFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gIG5nT25Jbml0KCkgeyBcbiAgIFxuICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXNcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIChwYXJhbXM6IFBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucXVlcnlWYWwgPSBwYXJhbXNbJ3F1ZXJ5J107XG4gICAgICAgICAgICB9IFxuICAgICAgICApO1xuICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHBhcmFtc1snY3VycmVudFBhZ2UnXTtcbiAgICAgIGxldCBpZCA9IHBhcmFtc1snaWQnXTtcbiAgICAgIHRoaXMucGxhY2VTZXJ2aWNlXG4gICAgICAgIC5nZXQoaWQpXG4gICAgICAgIC5zdWJzY3JpYmUocCA9PiB0aGlzLnBsYWNlID0gcCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgZ290b0xpc3QoKXtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3BhZ2VzJywgdGhpcy5jdXJyZW50UGFnZV0sIHsgcXVlcnlQYXJhbXM6IHsgcXVlcnk6IHRoaXMucXVlcnlWYWwgfSB9KTtcbiAgfVxuXG59XG4iXX0=
