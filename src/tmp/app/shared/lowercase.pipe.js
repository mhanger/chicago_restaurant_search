"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LowercasePipe = /** @class */ (function () {
    function LowercasePipe() {
    }
    LowercasePipe.prototype.transform = function (value) {
        if (typeof value !== 'undefined') {
            value = value.replace(/\|/g, '<br>');
            value = value.toLowerCase();
            return value;
        }
    };
    LowercasePipe = __decorate([
        core_1.Pipe({
            name: 'lowercase'
        })
    ], LowercasePipe);
    return LowercasePipe;
}());
exports.LowercasePipe = LowercasePipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbG93ZXJjYXNlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBb0Q7QUFLcEQ7SUFBQTtJQVFBLENBQUM7SUFQQyxpQ0FBUyxHQUFULFVBQVUsS0FBYTtRQUNyQixFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ25DLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNyQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDYixDQUFDO0lBQ0gsQ0FBQztJQVBVLGFBQWE7UUFIekIsV0FBSSxDQUFDO1lBQ0osSUFBSSxFQUFFLFdBQVc7U0FDbEIsQ0FBQztPQUNXLGFBQWEsQ0FRekI7SUFBRCxvQkFBQztDQVJELEFBUUMsSUFBQTtBQVJZLHNDQUFhIiwiZmlsZSI6ImFwcC9zaGFyZWQvbG93ZXJjYXNlLnBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2xvd2VyY2FzZSdcbn0pXG5leHBvcnQgY2xhc3MgTG93ZXJjYXNlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZykge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXHwvZywgJzxicj4nKTtcbiAgICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfVxufVxuIl19
