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
var people_service_1 = require("../people.service");
var router_1 = require("@angular/router");
var PersonDetailsComponent = /** @class */ (function () {
    function PersonDetailsComponent(route, peopleService, router) {
        this.route = route;
        this.peopleService = peopleService;
        this.router = router;
    }
    PersonDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            _this.queryVal = params['query'];
        });
        this.sub = this.route.params.subscribe(function (params) {
            _this.currentPage = params['currentPage'];
            var id = params['id'];
            _this.peopleService
                .get(id)
                .subscribe(function (p) { return _this.person = p; });
        });
    };
    PersonDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PersonDetailsComponent.prototype.gotoList = function () {
        this.router.navigate(['pages', this.currentPage], { queryParams: { query: this.queryVal } });
    };
    PersonDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-person-details',
            templateUrl: './person-details.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            people_service_1.PeopleService,
            router_1.Router])
    ], PersonDetailsComponent);
    return PersonDetailsComponent;
}());
exports.PersonDetailsComponent = PersonDetailsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wZXJzb24tZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUE2RDtBQUM3RCxvREFBa0Q7QUFFbEQsMENBQWlFO0FBU2pFO0lBT0UsZ0NBQW9CLEtBQXFCLEVBQ3JCLGFBQTRCLEVBQzVCLE1BQWM7UUFGZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUV0Qyx5Q0FBUSxHQUFSO1FBQUEsaUJBZUM7UUFiQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVc7YUFDakIsU0FBUyxDQUNOLFVBQUMsTUFBYztZQUNYLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FDSixDQUFDO1FBQ04sSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzFDLEtBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzFDLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixLQUFJLENBQUMsYUFBYTtpQkFDZixHQUFHLENBQUMsRUFBRSxDQUFDO2lCQUNQLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFmLENBQWUsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDRDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDL0YsQ0FBQztJQWxDVSxzQkFBc0I7UUFObEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsTUFBTSxFQUFFLEVBQUU7U0FDWCxDQUFDO3lDQVEyQix1QkFBYztZQUNOLDhCQUFhO1lBQ3BCLGVBQU07T0FUdkIsc0JBQXNCLENBb0NsQztJQUFELDZCQUFDO0NBcENELEFBb0NDLElBQUE7QUFwQ1ksd0RBQXNCIiwiZmlsZSI6ImFwcC9wZXJzb24tZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBlb3BsZVNlcnZpY2UgfSBmcm9tIFwiLi4vcGVvcGxlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFBlcnNvbiB9IGZyb20gXCIuLi9wZXJzb25cIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBMb3dlcmNhc2VQaXBlIH0gZnJvbSAnLi4vc2hhcmVkL2xvd2VyY2FzZS5waXBlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXBlcnNvbi1kZXRhaWxzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BlcnNvbi1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBQZXJzb25EZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwZXJzb246IFBlcnNvbjtcbiAgc3ViOmFueTtcbiAgY3VycmVudFBhZ2U6IG51bWJlcjtcbiAgcHJldmlvdXNVcmw6IHN0cmluZztcbiAgcXVlcnlWYWw6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBwZW9wbGVTZXJ2aWNlOiBQZW9wbGVTZXJ2aWNlLCAgICAgXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgbmdPbkluaXQoKSB7IFxuICAgXG4gICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtc1xuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHBhcmFtczogUGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWVyeVZhbCA9IHBhcmFtc1sncXVlcnknXTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICk7XG4gICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gcGFyYW1zWydjdXJyZW50UGFnZSddO1xuICAgICAgbGV0IGlkID0gcGFyYW1zWydpZCddO1xuICAgICAgdGhpcy5wZW9wbGVTZXJ2aWNlXG4gICAgICAgIC5nZXQoaWQpXG4gICAgICAgIC5zdWJzY3JpYmUocCA9PiB0aGlzLnBlcnNvbiA9IHApO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGdvdG9MaXN0KCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwYWdlcycsIHRoaXMuY3VycmVudFBhZ2VdLCB7IHF1ZXJ5UGFyYW1zOiB7IHF1ZXJ5OiB0aGlzLnF1ZXJ5VmFsIH0gfSk7XG4gIH1cblxufVxuIl19
