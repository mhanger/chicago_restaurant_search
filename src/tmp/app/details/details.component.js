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
            _this.queryVal = params.query;
            // console.log('detail query: ' + params.query);
        });
        this.sub = this.route.params
            .subscribe(function (params) {
            _this.currentPage = params.currentPage;
            // console.log('detail params: ' + params.currentPage + ', ' + params.id);
            var id = params.id;
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
            selector: 'as-details',
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTZEO0FBQzdELGtEQUFnRDtBQUVoRCwwQ0FBaUU7QUFTakU7SUFPRSwwQkFBb0IsS0FBcUIsRUFDckIsWUFBMEIsRUFDMUIsTUFBYztRQUZkLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRyxDQUFDO0lBRXRDLG1DQUFRLEdBQVI7UUFBQSxpQkFxQkM7UUFuQkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXO2FBQ2pCLFNBQVMsQ0FDTixVQUFDLE1BQXVCO1lBQ3JCLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUM3QixnREFBZ0Q7UUFDbkQsQ0FBQyxDQUNKLENBQUM7UUFFSixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTthQUN6QixTQUFTLENBQ1IsVUFBQyxNQUF5QztZQUMxQyxLQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDdEMsMEVBQTBFO1lBQzFFLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDbkIsS0FBSSxDQUFDLFlBQVk7aUJBQ2hCLEdBQUcsQ0FBQyxFQUFFLENBQUM7aUJBQ1AsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQWQsQ0FBYyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQsc0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBeENVLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsTUFBTSxFQUFFLEVBQUU7U0FDWCxDQUFDO3lDQVEyQix1QkFBYztZQUNQLDRCQUFZO1lBQ2xCLGVBQU07T0FUdkIsZ0JBQWdCLENBMEM1QjtJQUFELHVCQUFDO0NBMUNELEFBMENDLElBQUE7QUExQ1ksNENBQWdCIiwiZmlsZSI6ImFwcC9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhY2VTZXJ2aWNlIH0gZnJvbSAnLi4vcGxhY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBQbGFjZSB9IGZyb20gJy4uL3BsYWNlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBMb3dlcmNhc2VQaXBlIH0gZnJvbSAnLi4vc2hhcmVkL2xvd2VyY2FzZS5waXBlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXMtZGV0YWlscycsXG4gIHRlbXBsYXRlVXJsOiAnLi9kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBEZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwbGFjZTogUGxhY2U7XG4gIHN1YjogYW55O1xuICBjdXJyZW50UGFnZTogbnVtYmVyO1xuICBwcmV2aW91c1VybDogc3RyaW5nO1xuICBxdWVyeVZhbDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICBwcml2YXRlIHBsYWNlU2VydmljZTogUGxhY2VTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtc1xuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHBhcmFtczoge3F1ZXJ5OiBzdHJpbmd9KSA9PiB7XG4gICAgICAgICAgICAgICB0aGlzLnF1ZXJ5VmFsID0gcGFyYW1zLnF1ZXJ5O1xuICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2RldGFpbCBxdWVyeTogJyArIHBhcmFtcy5xdWVyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXNcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAocGFyYW1zOiB7aWQ6IG51bWJlciwgY3VycmVudFBhZ2U6IG51bWJlcn0pID0+IHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gcGFyYW1zLmN1cnJlbnRQYWdlO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdkZXRhaWwgcGFyYW1zOiAnICsgcGFyYW1zLmN1cnJlbnRQYWdlICsgJywgJyArIHBhcmFtcy5pZCk7XG4gICAgICAgICAgbGV0IGlkID0gcGFyYW1zLmlkO1xuICAgICAgICAgIHRoaXMucGxhY2VTZXJ2aWNlXG4gICAgICAgICAgLmdldChpZClcbiAgICAgICAgICAuc3Vic2NyaWJlKHAgPT4gdGhpcy5wbGFjZSA9IHApO1xuICAgICAgfSk7XG5cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBnb3RvTGlzdCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3BhZ2VzJywgdGhpcy5jdXJyZW50UGFnZV0sIHsgcXVlcnlQYXJhbXM6IHsgcXVlcnk6IHRoaXMucXVlcnlWYWwgfSB9KTtcbiAgfVxuXG59XG4iXX0=
