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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wZXJzb24tZGV0YWlscy9wZXJzb24tZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBNkQ7QUFDN0Qsb0RBQWtEO0FBRWxELDBDQUFpRTtBQVNqRTtJQU9FLGdDQUFvQixLQUFxQixFQUNyQixhQUE0QixFQUM1QixNQUFjO1FBRmQsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFFdEMseUNBQVEsR0FBUjtRQUFBLGlCQWVDO1FBYkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXO2FBQ2pCLFNBQVMsQ0FDTixVQUFDLE1BQWM7WUFDWCxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQ0osQ0FBQztRQUNOLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUMxQyxLQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMxQyxJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsS0FBSSxDQUFDLGFBQWE7aUJBQ2YsR0FBRyxDQUFDLEVBQUUsQ0FBQztpQkFDUCxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBZixDQUFlLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw0Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQseUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQy9GLENBQUM7SUFsQ1Usc0JBQXNCO1FBTmxDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLE1BQU0sRUFBRSxFQUFFO1NBQ1gsQ0FBQzt5Q0FRMkIsdUJBQWM7WUFDTiw4QkFBYTtZQUNwQixlQUFNO09BVHZCLHNCQUFzQixDQW9DbEM7SUFBRCw2QkFBQztDQXBDRCxBQW9DQyxJQUFBO0FBcENZLHdEQUFzQiIsImZpbGUiOiJhcHAvcGVyc29uLWRldGFpbHMvcGVyc29uLWRldGFpbHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGVvcGxlU2VydmljZSB9IGZyb20gXCIuLi9wZW9wbGUuc2VydmljZVwiO1xuaW1wb3J0IHsgUGVyc29uIH0gZnJvbSBcIi4uL3BlcnNvblwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IExvd2VyY2FzZVBpcGUgfSBmcm9tICcuLi9zaGFyZWQvbG93ZXJjYXNlLnBpcGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtcGVyc29uLWRldGFpbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGVyc29uLWRldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFBlcnNvbkRldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHBlcnNvbjogUGVyc29uO1xuICBzdWI6YW55O1xuICBjdXJyZW50UGFnZTogbnVtYmVyO1xuICBwcmV2aW91c1VybDogc3RyaW5nO1xuICBxdWVyeVZhbDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICBwcml2YXRlIHBlb3BsZVNlcnZpY2U6IFBlb3BsZVNlcnZpY2UsICAgICBcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cblxuICBuZ09uSW5pdCgpIHsgXG4gICBcbiAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocGFyYW1zOiBQYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXJ5VmFsID0gcGFyYW1zWydxdWVyeSddO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgKTtcbiAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYXJhbXNbJ2N1cnJlbnRQYWdlJ107XG4gICAgICBsZXQgaWQgPSBwYXJhbXNbJ2lkJ107XG4gICAgICB0aGlzLnBlb3BsZVNlcnZpY2VcbiAgICAgICAgLmdldChpZClcbiAgICAgICAgLnN1YnNjcmliZShwID0+IHRoaXMucGVyc29uID0gcCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgZ290b0xpc3QoKXtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3BhZ2VzJywgdGhpcy5jdXJyZW50UGFnZV0sIHsgcXVlcnlQYXJhbXM6IHsgcXVlcnk6IHRoaXMucXVlcnlWYWwgfSB9KTtcbiAgfVxuXG59XG4iXX0=
