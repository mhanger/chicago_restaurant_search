"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/router/testing");
var testing_2 = require("@angular/core/testing");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./shared/navbar/navbar.component");
var TestRouterComponent = /** @class */ (function () {
    function TestRouterComponent() {
    }
    TestRouterComponent = __decorate([
        core_1.Component({
            selector: 'as-test-cmp',
            template: '<div class="title">Hello test</div>'
        })
    ], TestRouterComponent);
    return TestRouterComponent;
}());
var config = [
    {
        path: '', component: TestRouterComponent
    }
];
describe('AppComponent', function () {
    beforeEach(function () {
        testing_2.TestBed.configureTestingModule({
            declarations: [
                TestRouterComponent,
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent
            ],
            imports: [testing_1.RouterTestingModule, router_1.RouterModule],
            providers: [router_1.provideRoutes(config)]
        });
    });
    it('should have title Hello world', testing_2.async(function () {
        testing_2.TestBed.compileComponents().then(function () {
            var fixture;
            fixture = testing_2.TestBed.createComponent(app_component_1.AppComponent);
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;
            expect(compiled).toBeDefined();
            // TODO: find a way to compile the routed component
            // expect(compiled.querySelector('div.title')).toMatch('Hello world');
        });
    }));
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxtREFFaUM7QUFDakMsaURBSStCO0FBQy9CLDBDQUFzRTtBQUN0RSxzQ0FBMEM7QUFFMUMsaURBQStDO0FBQy9DLHFFQUFtRTtBQU1uRTtJQUFBO0lBQ0EsQ0FBQztJQURLLG1CQUFtQjtRQUp4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLHFDQUFxQztTQUNsRCxDQUFDO09BQ0ksbUJBQW1CLENBQ3hCO0lBQUQsMEJBQUM7Q0FERCxBQUNDLElBQUE7QUFFRCxJQUFJLE1BQU0sR0FBVztJQUNqQjtRQUNJLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLG1CQUFtQjtLQUMzQztDQUNKLENBQUM7QUFFRixRQUFRLENBQUMsY0FBYyxFQUFFO0lBQ3JCLFVBQVUsQ0FBQztRQUNQLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7WUFDM0IsWUFBWSxFQUFFO2dCQUNWLG1CQUFtQjtnQkFDbkIsNEJBQVk7Z0JBQ1osa0NBQWU7YUFDbEI7WUFDRCxPQUFPLEVBQUUsQ0FBRSw2QkFBbUIsRUFBRSxxQkFBWSxDQUFFO1lBQzlDLFNBQVMsRUFBRSxDQUFFLHNCQUFhLENBQUMsTUFBTSxDQUFDLENBQUU7U0FDdkMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsK0JBQStCLEVBQUUsZUFBSyxDQUFDO1FBQ3RDLGlCQUFPLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDN0IsSUFBSSxPQUF1QyxDQUFDO1lBQzVDLE9BQU8sR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyw0QkFBWSxDQUFDLENBQUM7WUFDaEQsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBRXhCLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDO1lBQ2xELE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMvQixtREFBbUQ7WUFDbkQsc0VBQXNFO1FBQzFFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNSLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIFJvdXRlclRlc3RpbmdNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyL3Rlc3RpbmcnO1xuaW1wb3J0IHtcbiAgICBhc3luYyxcbiAgICBUZXN0QmVkLFxuICAgIENvbXBvbmVudEZpeHR1cmVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IHByb3ZpZGVSb3V0ZXMsIFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmF2YmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FzLXRlc3QtY21wJyxcbiAgICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJ0aXRsZVwiPkhlbGxvIHRlc3Q8L2Rpdj4nXG59KVxuY2xhc3MgVGVzdFJvdXRlckNvbXBvbmVudCB7XG59XG5cbmxldCBjb25maWc6IFJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6ICcnLCBjb21wb25lbnQ6IFRlc3RSb3V0ZXJDb21wb25lbnRcbiAgICB9XG5dO1xuXG5kZXNjcmliZSgnQXBwQ29tcG9uZW50JywgKCkgPT4ge1xuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgICAgICAgICAgVGVzdFJvdXRlckNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgTmF2YmFyQ29tcG9uZW50XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgaW1wb3J0czogWyBSb3V0ZXJUZXN0aW5nTW9kdWxlLCBSb3V0ZXJNb2R1bGUgXSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogWyBwcm92aWRlUm91dGVzKGNvbmZpZykgXVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgaGF2ZSB0aXRsZSBIZWxsbyB3b3JsZCcsIGFzeW5jKCgpID0+IHtcbiAgICAgICAgVGVzdEJlZC5jb21waWxlQ29tcG9uZW50cygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8QXBwQ29tcG9uZW50PjtcbiAgICAgICAgICAgIGZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChBcHBDb21wb25lbnQpO1xuICAgICAgICAgICAgZml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgICAgIGxldCBjb21waWxlZCA9IGZpeHR1cmUuZGVidWdFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICBleHBlY3QoY29tcGlsZWQpLnRvQmVEZWZpbmVkKCk7XG4gICAgICAgICAgICAvLyBUT0RPOiBmaW5kIGEgd2F5IHRvIGNvbXBpbGUgdGhlIHJvdXRlZCBjb21wb25lbnRcbiAgICAgICAgICAgIC8vIGV4cGVjdChjb21waWxlZC5xdWVyeVNlbGVjdG9yKCdkaXYudGl0bGUnKSkudG9NYXRjaCgnSGVsbG8gd29ybGQnKTtcbiAgICAgICAgfSk7XG4gICAgfSkpO1xufSk7XG4iXX0=
