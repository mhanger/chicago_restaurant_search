"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, args) {
        if (typeof value != 'undefined') {
            var limit = parseInt(args);
            var trail = args.length > 1 ? args[1] : '...';
            value = value.toLowerCase();
            return value.length > limit ? value.substring(0, limit) + trail : value;
        }
    };
    TruncatePipe = __decorate([
        core_1.Pipe({
            name: 'truncate'
        })
    ], TruncatePipe);
    return TruncatePipe;
}());
exports.TruncatePipe = TruncatePipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdHJ1bmNhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUFrRDtBQUtsRDtJQUFBO0lBVUEsQ0FBQztJQVRDLGdDQUFTLEdBQVQsVUFBVSxLQUFhLEVBQUUsSUFBWTtRQUNuQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDOUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM1QixNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3hFLENBQUM7SUFFSCxDQUFDO0lBVFUsWUFBWTtRQUh4QixXQUFJLENBQUM7WUFDSixJQUFJLEVBQUUsVUFBVTtTQUNqQixDQUFDO09BQ1csWUFBWSxDQVV4QjtJQUFELG1CQUFDO0NBVkQsQUFVQyxJQUFBO0FBVlksb0NBQVkiLCJmaWxlIjoiYXBwL3NoYXJlZC90cnVuY2F0ZS5waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAndHJ1bmNhdGUnXG59KVxuZXhwb3J0IGNsYXNzIFRydW5jYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgYXJnczogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAndW5kZWZpbmVkJykge1xuICAgIGxldCBsaW1pdCA9IHBhcnNlSW50KGFyZ3MpO1xuICAgIGxldCB0cmFpbCA9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiAnLi4uJztcbiAgICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IGxpbWl0ID8gdmFsdWUuc3Vic3RyaW5nKDAsIGxpbWl0KSArIHRyYWlsIDogdmFsdWU7XG4gICAgfVxuXG4gIH1cbn0iXX0=
