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
        this.testCurrentPage = this.route.snapshot.params.currentPage;
        // console.log('currentPage: ' + this.testCurrentPage);
        this.route.queryParams
            .subscribe(function (params) {
            _this.existingQueryVal = params.query;
            // console.log('query: ' + params.query);
        });
        if (typeof this.testCurrentPage === 'string') {
            // check if coming back to existing page from detail
            this.currentPage = Number(this.testCurrentPage);
        }
        else {
            this.currentPage = 1;
        }
        if (typeof this.existingQueryVal !== 'undefined') {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWtEO0FBRWxELGtEQUFnRDtBQUNoRCwwQ0FBeUM7QUFDekMsMENBQXlEO0FBV3pEO0lBY0UsdUJBQW9CLFlBQTBCLEVBQVUsS0FBcUIsRUFBVSxNQUFjO1FBQWpGLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBYm5HLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRWhCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUN0QixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxXQUFNLEdBQVksRUFBRSxDQUFDO1FBQ3JCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsaUJBQVksR0FBRyxLQUFLLENBQUM7SUFFa0YsQ0FBQztJQUV4RyxnQ0FBUSxHQUFSO1FBQUEsaUJBdUJDO1FBdEJHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUM5RCx1REFBdUQ7UUFFdkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXO2FBQ3JCLFNBQVMsQ0FDTixVQUFDLE1BQXVCO1lBQ3RCLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3JDLHlDQUF5QztRQUMzQyxDQUFDLENBQ0osQ0FBQztRQUVOLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLGVBQWUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzNDLG9EQUFv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RUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzdGLElBQUksQ0FBQyxZQUFZO2lCQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDO2lCQUNuQyxTQUFTO1lBQ1YsZ0JBQWdCLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBZixDQUFlO1lBQ3JDLGdCQUFnQixDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEVBQXJCLENBQXFCO1lBQzNDLGlCQUFpQixDQUFDLCtCQUErQjtZQUNqRCxjQUFRLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDcEMsQ0FBQztRQUVGLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLENBQUM7SUFDTCxDQUFDO0lBeEdJLGFBQWE7UUFSekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsV0FBVztZQUN4QixTQUFTLEVBQUU7Z0JBQ1AsVUFBVTthQUNiO1NBQ0osQ0FBQzt5Q0Fla0MsNEJBQVksRUFBaUIsdUJBQWMsRUFBa0IsZUFBTTtPQWQxRixhQUFhLENBeUd6QjtJQUFELG9CQUFDO0NBekdELEFBeUdDLElBQUE7QUF6R1ksc0NBQWEiLCJmaWxlIjoiYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhY2UgfSBmcm9tICcuLi9wbGFjZSc7XG5pbXBvcnQgeyBQbGFjZVNlcnZpY2UgfSBmcm9tICcuLi9wbGFjZS5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2FzLWhvbWUnLFxuICAgIHRlbXBsYXRlVXJsOiAnaG9tZS5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtcbiAgICAgICAgJ2hvbWUuY3NzJ1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXNOb1Jlc3VsdHMgPSBmYWxzZTtcbiAgICBjdXJyZW50UGFnZSA9IDA7XG4gICAgdGVzdEN1cnJlbnRQYWdlOiBudW1iZXI7XG4gICAgaXNGaXJzdExvYWQgPSB0cnVlO1xuICAgIGV4aXN0aW5nUXVlcnlWYWwgPSAnJztcbiAgICBpc1N1Ym1pdHRlZCA9IGZhbHNlO1xuICAgIGlzRW1wdHkgPSBmYWxzZTtcbiAgICBxdWVyeVZhbCA9ICcnO1xuICAgIHBsYWNlczogUGxhY2VbXSA9IFtdO1xuICAgIGVycm9yTWVzc2FnZSA9ICcnO1xuICAgIGlzTG9hZGluZyA9IHRydWU7XG4gICAgc2hvd0NvbnRyb2xzID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwbGFjZVNlcnZpY2U6IFBsYWNlU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudGVzdEN1cnJlbnRQYWdlID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMuY3VycmVudFBhZ2U7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjdXJyZW50UGFnZTogJyArIHRoaXMudGVzdEN1cnJlbnRQYWdlKTtcblxuICAgICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocGFyYW1zOiB7cXVlcnk6IHN0cmluZ30pID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5leGlzdGluZ1F1ZXJ5VmFsID0gcGFyYW1zLnF1ZXJ5O1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncXVlcnk6ICcgKyBwYXJhbXMucXVlcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnRlc3RDdXJyZW50UGFnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgLy8gY2hlY2sgaWYgY29taW5nIGJhY2sgdG8gZXhpc3RpbmcgcGFnZSBmcm9tIGRldGFpbFxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gTnVtYmVyKHRoaXMudGVzdEN1cnJlbnRQYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMuZXhpc3RpbmdRdWVyeVZhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5xdWVyeVZhbCA9IHRoaXMuZXhpc3RpbmdRdWVyeVZhbDtcbiAgICAgICAgdGhpcy5nZXREYXRhKHRoaXMucXVlcnlWYWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXRGb3JtKCkge1xuICAgICAgICB0aGlzLnF1ZXJ5VmFsID0gJyc7XG4gICAgICAgIHRoaXMucGxhY2VzID0gW107XG4gICAgICAgIHRoaXMuaXNFbXB0eSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU3VibWl0dGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNOb1Jlc3VsdHMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XG4gICAgICAgIHRoaXMuaXNGaXJzdExvYWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmV4aXN0aW5nUXVlcnlWYWwgPSAnJztcbiAgICAgICAgdGhpcy5pc1N1Ym1pdHRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRW1wdHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnNob3dDb250cm9scyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHN1Ym1pdFF1ZXJ5KCkge1xuICAgICAgICB0aGlzLmdldERhdGEodGhpcy5xdWVyeVZhbCk7XG4gICAgfVxuXG4gICAgY2hlY2tRdWVyeShlKSB7XG4gICAgICAgIHRoaXMucmVzZXRGb3JtKCk7XG4gICAgfVxuXG4gICAgbmV4dERhdGEoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgKz0gMTtcbiAgICAgICAgdGhpcy5nZXREYXRhKHRoaXMucXVlcnlWYWwpO1xuICAgIH1cblxuICAgIHByZXZEYXRhKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlIC09IDE7XG4gICAgICAgIHRoaXMuZ2V0RGF0YSh0aGlzLnF1ZXJ5VmFsKTtcbiAgICB9XG5cbiAgICBmaW5pc2hlZExvYWRpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYWNlcy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICB0aGlzLmlzTm9SZXN1bHRzID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQgKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q29udHJvbHMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXREYXRhKHF1ZXJ5VmFsKSB7XG4gICAgICAgIGlmICh0aGlzLnF1ZXJ5VmFsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaXNTdWJtaXR0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pc0VtcHR5ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3BhZ2VzJywgdGhpcy5jdXJyZW50UGFnZV0sIHsgcXVlcnlQYXJhbXM6IHsgcXVlcnk6IHRoaXMucXVlcnlWYWwgfSB9KTtcbiAgICAgICAgICAgIHRoaXMucGxhY2VTZXJ2aWNlXG4gICAgICAgICAgICAuZ2V0QWxsKHRoaXMucXVlcnlWYWwsIHRoaXMuY3VycmVudFBhZ2UpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAvKiBoYXBweSBwYXRoICovIHAgPT4gdGhpcy5wbGFjZXMgPSBwLFxuICAgICAgICAgICAgICAgIC8qIGVycm9yIHBhdGggKi8gZSA9PiB0aGlzLmVycm9yTWVzc2FnZSA9IGUsXG4gICAgICAgICAgICAgICAgLyogb25Db21wbGV0ZWQgKi8gLy8gKCkgPT4gdGhpcy5pc0xvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgICgpID0+IHsgdGhpcy5maW5pc2hlZExvYWRpbmcoKTsgfVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRW1wdHkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG59XG4iXX0=
