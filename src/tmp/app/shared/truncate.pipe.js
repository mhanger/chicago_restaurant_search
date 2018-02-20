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
        if (typeof value !== 'undefined') {
            var limit = parseInt(args, 10);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdHJ1bmNhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUFvRDtBQUtwRDtJQUFBO0lBU0EsQ0FBQztJQVJDLGdDQUFTLEdBQVQsVUFBVSxLQUFhLEVBQUUsSUFBWTtRQUNuQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ25DLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDL0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQzlDLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDNUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN4RSxDQUFDO0lBQ0gsQ0FBQztJQVJVLFlBQVk7UUFIeEIsV0FBSSxDQUFDO1lBQ0osSUFBSSxFQUFFLFVBQVU7U0FDakIsQ0FBQztPQUNXLFlBQVksQ0FTeEI7SUFBRCxtQkFBQztDQVRELEFBU0MsSUFBQTtBQVRZLG9DQUFZIiwiZmlsZSI6ImFwcC9zaGFyZWQvdHJ1bmNhdGUucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAndHJ1bmNhdGUnXG59KVxuZXhwb3J0IGNsYXNzIFRydW5jYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgYXJnczogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgbGltaXQgPSBwYXJzZUludChhcmdzLCAxMCk7XG4gICAgbGV0IHRyYWlsID0gYXJncy5sZW5ndGggPiAxID8gYXJnc1sxXSA6ICcuLi4nO1xuICAgIHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gbGltaXQgPyB2YWx1ZS5zdWJzdHJpbmcoMCwgbGltaXQpICsgdHJhaWwgOiB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
