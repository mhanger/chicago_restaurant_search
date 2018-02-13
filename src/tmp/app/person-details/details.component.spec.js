"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var details_component_1 = require("./details.component");
describe('PersonDetailsComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [details_component_1.PersonDetailsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(details_component_1.PersonDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wZXJzb24tZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQXlFO0FBRXpFLHlEQUE2RDtBQUU3RCxRQUFRLENBQUMsd0JBQXdCLEVBQUU7SUFDakMsSUFBSSxTQUFpQyxDQUFDO0lBQ3RDLElBQUksT0FBaUQsQ0FBQztJQUV0RCxVQUFVLENBQUMsZUFBSyxDQUFDO1FBQ2YsaUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUM3QixZQUFZLEVBQUUsQ0FBRSwwQ0FBc0IsQ0FBRTtTQUN6QyxDQUFDO2FBQ0QsaUJBQWlCLEVBQUUsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRUosVUFBVSxDQUFDO1FBQ1QsT0FBTyxHQUFHLGlCQUFPLENBQUMsZUFBZSxDQUFDLDBDQUFzQixDQUFDLENBQUM7UUFDMUQsU0FBUyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUN0QyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZUFBZSxFQUFFO1FBQ2xCLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC9wZXJzb24tZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXN5bmMsIENvbXBvbmVudEZpeHR1cmUsIFRlc3RCZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuXG5pbXBvcnQgeyBQZXJzb25EZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi9kZXRhaWxzLmNvbXBvbmVudCc7XG5cbmRlc2NyaWJlKCdQZXJzb25EZXRhaWxzQ29tcG9uZW50JywgKCkgPT4ge1xuICBsZXQgY29tcG9uZW50OiBQZXJzb25EZXRhaWxzQ29tcG9uZW50O1xuICBsZXQgZml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTxQZXJzb25EZXRhaWxzQ29tcG9uZW50PjtcblxuICBiZWZvcmVFYWNoKGFzeW5jKCgpID0+IHtcbiAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgICAgZGVjbGFyYXRpb25zOiBbIFBlcnNvbkRldGFpbHNDb21wb25lbnQgXVxuICAgIH0pXG4gICAgLmNvbXBpbGVDb21wb25lbnRzKCk7XG4gIH0pKTtcblxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoUGVyc29uRGV0YWlsc0NvbXBvbmVudCk7XG4gICAgY29tcG9uZW50ID0gZml4dHVyZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICBmaXh0dXJlLmRldGVjdENoYW5nZXMoKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBjcmVhdGUnLCAoKSA9PiB7XG4gICAgZXhwZWN0KGNvbXBvbmVudCkudG9CZVRydXRoeSgpO1xuICB9KTtcbn0pO1xuIl19
