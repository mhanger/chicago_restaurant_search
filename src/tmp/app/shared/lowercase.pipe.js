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
        if (typeof value != 'undefined') {
            value = value.replace('|', '<br>');
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbG93ZXJjYXNlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBa0Q7QUFLbEQ7SUFBQTtJQVNBLENBQUM7SUFSQyxpQ0FBUyxHQUFULFVBQVUsS0FBYTtRQUNyQixFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNuQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDYixDQUFDO0lBRUgsQ0FBQztJQVJVLGFBQWE7UUFIekIsV0FBSSxDQUFDO1lBQ0osSUFBSSxFQUFFLFdBQVc7U0FDbEIsQ0FBQztPQUNXLGFBQWEsQ0FTekI7SUFBRCxvQkFBQztDQVRELEFBU0MsSUFBQTtBQVRZLHNDQUFhIiwiZmlsZSI6ImFwcC9zaGFyZWQvbG93ZXJjYXNlLnBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdsb3dlcmNhc2UnXG59KVxuZXhwb3J0IGNsYXNzIExvd2VyY2FzZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9ICd1bmRlZmluZWQnKSB7ICAgXG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKCd8JywgJzxicj4nKTtcbiAgICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICB9XG59Il19
