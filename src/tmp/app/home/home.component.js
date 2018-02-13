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
var router_2 = require("@angular/router");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(placeService, route, router) {
        this.placeService = placeService;
        this.route = route;
        this.router = router;
        this.isNoResults = false;
        this.currentPage = 0;
        this.isFirstLoad = true;
        this.existingQueryVal = '';
        this.isSubmitted = false;
        this.isEmpty = false;
        this.queryVal = '';
        this.places = [];
        this.errorMessage = '';
        this.isLoading = true;
        this.showControls = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.testCurrentPage = this.route.snapshot.params['currentPage'];
        this.route.queryParams
            .subscribe(function (params) {
            _this.existingQueryVal = params['query'];
        });
        if (typeof this.testCurrentPage === 'string') {
            //check if coming back to existing page from detail
            this.currentPage = Number(this.testCurrentPage);
        }
        else {
            this.currentPage = 1;
        }
        if (this.existingQueryVal !== undefined) {
            this.queryVal = this.existingQueryVal;
            this.getData(this.queryVal);
        }
    };
    HomeComponent.prototype.resetForm = function () {
        this.queryVal = '';
        this.places = [];
        this.isEmpty = false;
        this.isSubmitted = false;
        this.isNoResults = false;
        this.currentPage = 1;
        this.isFirstLoad = true;
        this.existingQueryVal = '';
        this.isSubmitted = false;
        this.isEmpty = false;
        this.errorMessage = '';
        this.isLoading = true;
        this.showControls = false;
    };
    HomeComponent.prototype.submitQuery = function () {
        this.getData(this.queryVal);
    };
    HomeComponent.prototype.checkQuery = function (e) {
        this.resetForm();
    };
    HomeComponent.prototype.nextData = function () {
        this.currentPage += 1;
        this.getData(this.queryVal);
    };
    HomeComponent.prototype.prevData = function () {
        this.currentPage -= 1;
        this.getData(this.queryVal);
    };
    HomeComponent.prototype.finishedLoading = function () {
        var _this = this;
        if (this.places.length < 1) {
            this.isNoResults = true;
        }
        else {
            setTimeout(function () {
                _this.showControls = true;
            }, 500);
        }
        this.isLoading = false;
    };
    HomeComponent.prototype.getData = function (queryVal) {
        var _this = this;
        if (this.queryVal.length > 0) {
            this.isLoading = true;
            this.isSubmitted = true;
            this.isEmpty = false;
            this.router.navigate(['pages', this.currentPage], { queryParams: { query: this.queryVal } });
            this.placeService
                .getAll(this.queryVal, this.currentPage)
                .subscribe(
            /* happy path */ function (p) { return _this.places = p; }, 
            /* error path */ function (e) { return _this.errorMessage = e; }, 
            /* onCompleted */ // () => this.isLoading = false   
            function () { _this.finishedLoading(); });
        }
        else {
            this.isEmpty = true;
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'as-home',
            templateUrl: 'home.html',
            styleUrls: [
                'home.css'
            ]
        }),
        __metadata("design:paramtypes", [place_service_1.PlaceService, router_2.ActivatedRoute, router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWtEO0FBRWxELGtEQUFnRDtBQUNoRCwwQ0FBeUM7QUFDekMsMENBQXlEO0FBV3pEO0lBY0UsdUJBQW9CLFlBQTBCLEVBQVUsS0FBcUIsRUFBVSxNQUFjO1FBQWpGLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBYm5HLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRXhCLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLHFCQUFnQixHQUFXLEVBQUUsQ0FBQztRQUM5QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsV0FBTSxHQUFZLEVBQUUsQ0FBQztRQUNyQixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixjQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGlCQUFZLEdBQVksS0FBSyxDQUFDO0lBRXlFLENBQUM7SUFFeEcsZ0NBQVEsR0FBUjtRQUFBLGlCQW9CQztRQW5CRyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVc7YUFDakIsU0FBUyxDQUNOLFVBQUMsTUFBYztZQUNYLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUNKLENBQUM7UUFDVixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxlQUFlLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMzQyxtREFBbUQ7WUFDbkQsSUFBSSxDQUFD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SSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM3RixJQUFJLENBQUMsWUFBWTtpQkFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQztpQkFDdkMsU0FBUztZQUNWLGdCQUFnQixDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQWYsQ0FBZTtZQUNyQyxnQkFBZ0IsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxFQUFyQixDQUFxQjtZQUMzQyxpQkFBaUIsQ0FBQyxrQ0FBa0M7WUFDcEQsY0FBTyxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUEsQ0FBQSxDQUFDLENBQzdCLENBQUM7UUFFRixDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN4QixDQUFDO0lBQ0wsQ0FBQztJQXZHSSxhQUFhO1FBUnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLFdBQVc7WUFDeEIsU0FBUyxFQUFFO2dCQUNQLFVBQVU7YUFDYjtTQUNKLENBQUM7eUNBZWtDLDRCQUFZLEVBQWlCLHVCQUFjLEVBQWtCLGVBQU07T0FkMUYsYUFBYSxDQXdHekI7SUFBRCxvQkFBQztDQXhHRCxBQXdHQyxJQUFBO0FBeEdZLHNDQUFhIiwiZmlsZSI6ImFwcC9ob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYWNlIH0gZnJvbSAnLi4vcGxhY2UnO1xuaW1wb3J0IHsgUGxhY2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3BsYWNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJzsgXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdhcy1ob21lJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2hvbWUuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXG4gICAgICAgICdob21lLmNzcydcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGlzTm9SZXN1bHRzOiBib29sZWFuID0gZmFsc2U7XG4gICAgY3VycmVudFBhZ2U6IG51bWJlciA9IDA7XG4gICAgdGVzdEN1cnJlbnRQYWdlIDogbnVtYmVyO1xuICAgIGlzRmlyc3RMb2FkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBleGlzdGluZ1F1ZXJ5VmFsOiBzdHJpbmcgPSAnJztcbiAgICBpc1N1Ym1pdHRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzRW1wdHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBxdWVyeVZhbDogc3RyaW5nID0gJyc7XG4gICAgcGxhY2VzOiBQbGFjZVtdID0gW107IFxuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XG4gICAgaXNMb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcbiAgICBzaG93Q29udHJvbHM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsYWNlU2VydmljZTogUGxhY2VTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHsgICAgICAgXG4gICAgICAgIHRoaXMudGVzdEN1cnJlbnRQYWdlID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2N1cnJlbnRQYWdlJ107XG4gICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXNcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKHBhcmFtczogUGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhpc3RpbmdRdWVyeVZhbCA9IHBhcmFtc1sncXVlcnknXTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgKTtcbiAgICBpZiAodHlwZW9mIHRoaXMudGVzdEN1cnJlbnRQYWdlID09PSAnc3RyaW5nJykge1xuICAgICAgICAvL2NoZWNrIGlmIGNvbWluZyBiYWNrIHRvIGV4aXN0aW5nIHBhZ2UgZnJvbSBkZXRhaWxcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IE51bWJlcih0aGlzLnRlc3RDdXJyZW50UGFnZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5leGlzdGluZ1F1ZXJ5VmFsICE9PXVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnF1ZXJ5VmFsID0gdGhpcy5leGlzdGluZ1F1ZXJ5VmFsO1xuICAgICAgICB0aGlzLmdldERhdGEodGhpcy5xdWVyeVZhbCk7IFxuICAgICAgICB9IFxuICAgIH1cblxuICAgIHJlc2V0Rm9ybSgpIHtcbiAgICAgICAgdGhpcy5xdWVyeVZhbD0nJztcbiAgICAgICAgdGhpcy5wbGFjZXMgPSBbXTtcbiAgICAgICAgdGhpcy5pc0VtcHR5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNTdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc05vUmVzdWx0cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcbiAgICAgICAgdGhpcy5pc0ZpcnN0TG9hZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZXhpc3RpbmdRdWVyeVZhbCA9ICcnO1xuICAgICAgICB0aGlzLmlzU3VibWl0dGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNFbXB0eSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hvd0NvbnRyb2xzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc3VibWl0UXVlcnkoKSB7XG4gICAgICAgIHRoaXMuZ2V0RGF0YSh0aGlzLnF1ZXJ5VmFsKTsgIFxuICAgIH1cbiAgICBcbiAgICBjaGVja1F1ZXJ5KGUpIHsgIFxuICAgICAgICB0aGlzLnJlc2V0Rm9ybSgpO1xuICAgIH1cblxuICAgIG5leHREYXRhKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlICs9IDE7XG4gICAgICAgIHRoaXMuZ2V0RGF0YSh0aGlzLnF1ZXJ5VmFsKTsgIFxuICAgIH1cblxuICAgIHByZXZEYXRhKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlIC09IDE7XG4gICAgICAgIHRoaXMuZ2V0RGF0YSh0aGlzLnF1ZXJ5VmFsKTsgICBcbiAgICB9XG5cbiAgICBmaW5pc2hlZExvYWRpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYWNlcy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICB0aGlzLmlzTm9SZXN1bHRzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQgKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q29udHJvbHMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlOyAgIFxuICAgIH1cblxuICAgIGdldERhdGEocXVlcnlWYWwpeyAgICAgXG4gICAgICAgIGlmICh0aGlzLnF1ZXJ5VmFsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaXNTdWJtaXR0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pc0VtcHR5ID0gZmFsc2U7IFxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwYWdlcycsIHRoaXMuY3VycmVudFBhZ2VdLCB7IHF1ZXJ5UGFyYW1zOiB7IHF1ZXJ5OiB0aGlzLnF1ZXJ5VmFsIH0gfSk7XG4gICAgICAgICAgICB0aGlzLnBsYWNlU2VydmljZVxuICAgICAgICAgICAgLmdldEFsbCh0aGlzLnF1ZXJ5VmFsLCB0aGlzLmN1cnJlbnRQYWdlKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIC8qIGhhcHB5IHBhdGggKi8gcCA9PiB0aGlzLnBsYWNlcyA9IHAsXG4gICAgICAgICAgICAvKiBlcnJvciBwYXRoICovIGUgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSBlLFxuICAgICAgICAgICAgLyogb25Db21wbGV0ZWQgKi8gLy8gKCkgPT4gdGhpcy5pc0xvYWRpbmcgPSBmYWxzZSAgIFxuICAgICAgICAgICAgKCkgPT4ge3RoaXMuZmluaXNoZWRMb2FkaW5nKCl9ICAgICAgICAgXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRW1wdHkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG59XG4iXX0=
