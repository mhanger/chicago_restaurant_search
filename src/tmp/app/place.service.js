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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var PLACES = [];
var PlaceService = /** @class */ (function () {
    function PlaceService(http) {
        this.http = http;
        this.baseUrl = 'https://data.cityofchicago.org/resource/cwig-ma7x.json?';
    }
    PlaceService.prototype.getAll = function (searchTerm, page) {
        var offset = (page - 1) * 5;
        var searchStringVal = "$limit=5&$offset=" + offset + "&$order=inspection_id%20DESC&$where=dba_name%20like%20%27%25" + searchTerm.toUpperCase() + "%25%27";
        var places$ = this.http
            .get("" + (this.baseUrl + searchStringVal), { headers: this.getHeaders() })
            .map(mapPersons)
            .catch(handleError);
        return places$;
    };
    PlaceService.prototype.getHeaders = function () {
        // I included these headers because otherwise FireFox
        // will request text/html
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    PlaceService.prototype.get = function (id) {
        var searchStringVal = "$where=inspection_id=" + id;
        var place$ = this.http
            .get("" + (this.baseUrl + searchStringVal), { headers: this.getHeaders() })
            .map(mapPerson)
            .catch(handleError);
        return place$;
    };
    PlaceService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], PlaceService);
    return PlaceService;
}());
exports.PlaceService = PlaceService;
function mapPersons(response) {
    return response.json().map(toPerson);
}
function toPerson(r) {
    var place = ({
        id: r.inspection_id,
        dba_name: r.dba_name,
        inspection_type: r.inspection_type,
        license: r.license_,
        facility_type: r.facility_type,
        results: r.results,
        violations: r.violations
    });
    return place;
}
function mapPerson(response) {
    // toPerson looks just like in the previous example
    return response.json().map(toPerson);
}
// this could also be a private method of the component class
function handleError(error) {
    // log error
    // could be something more sofisticated
    var errorMsg = error.message || "Yikes! There was a problem with the service call and we couldn't retrieve your data!";
    console.error(errorMsg);
    // throw an application level error
    return Observable_1.Observable.throw(errorMsg);
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,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Q0FBdUM7SUFDdkMsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxzRkFBc0YsQ0FBQTtJQUN0SCxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXhCLG1DQUFtQztJQUNuQyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDcEMsQ0FBQyIsImZpbGUiOiJhcHAvcGxhY2Uuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBSZXF1ZXN0T3B0aW9ucywgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcblxuaW1wb3J0IHsgUGxhY2UgfSBmcm9tICcuL3BsYWNlJztcblxuY29uc3QgUExBQ0VTIDogUGxhY2VbXSA9IFtcbiAgICAgXG4gICAgXTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBsYWNlU2VydmljZXtcblxuIHByaXZhdGUgYmFzZVVybDogc3RyaW5nID0gJ2h0dHBzOi8vZGF0YS5jaXR5b2ZjaGljYWdvLm9yZy9yZXNvdXJjZS9jd2lnLW1hN3guanNvbj8nO1xuIFxuIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cCA6IEh0dHApe1xuICB9XG5cbiAgZ2V0QWxsKHNlYXJjaFRlcm0sIHBhZ2UpOiBPYnNlcnZhYmxlPFBsYWNlW10+eyAgXG4gICAgY29uc3Qgb2Zmc2V0ID0gKHBhZ2UgLSAxKSAqIDU7XG4gICAgbGV0IHNlYXJjaFN0cmluZ1ZhbCA9IGAkbGltaXQ9NSYkb2Zmc2V0PSR7b2Zmc2V0fSYkb3JkZXI9aW5zcGVjdGlvbl9pZCUyMERFU0MmJHdoZXJlPWRiYV9uYW1lJTIwbGlrZSUyMCUyNyUyNSR7c2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpfSUyNSUyN2A7XG4gICAgbGV0IHBsYWNlcyQgPSB0aGlzLmh0dHBcbiAgICAgIC5nZXQoYCR7dGhpcy5iYXNlVXJsK3NlYXJjaFN0cmluZ1ZhbH1gLCB7IGhlYWRlcnM6IHRoaXMuZ2V0SGVhZGVycygpfSlcbiAgICAgIC5tYXAobWFwUGVyc29ucylcbiAgICAgIC5jYXRjaChoYW5kbGVFcnJvcik7XG4gICAgICByZXR1cm4gcGxhY2VzJDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGVhZGVycygpe1xuICAgIC8vIEkgaW5jbHVkZWQgdGhlc2UgaGVhZGVycyBiZWNhdXNlIG90aGVyd2lzZSBGaXJlRm94XG4gICAgLy8gd2lsbCByZXF1ZXN0IHRleHQvaHRtbFxuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICByZXR1cm4gaGVhZGVycztcbiAgfVxuXG4gIGdldChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxQbGFjZT57XG4gICAgbGV0IHNlYXJjaFN0cmluZ1ZhbCA9IGAkd2hlcmU9aW5zcGVjdGlvbl9pZD0ke2lkfWA7XG4gICAgbGV0IHBsYWNlJCA9IHRoaXMuaHR0cFxuICAgICAgLmdldChgJHt0aGlzLmJhc2VVcmwrc2VhcmNoU3RyaW5nVmFsfWAsIHtoZWFkZXJzOiB0aGlzLmdldEhlYWRlcnMoKX0pXG4gICAgICAubWFwKG1hcFBlcnNvbilcbiAgICAgIC5jYXRjaChoYW5kbGVFcnJvcik7XG4gICAgICByZXR1cm4gcGxhY2UkO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcFBlcnNvbnMocmVzcG9uc2U6UmVzcG9uc2UpOiBQbGFjZVtde1xuXG4gIHJldHVybiByZXNwb25zZS5qc29uKCkubWFwKHRvUGVyc29uKVxufVxuXG5mdW5jdGlvbiB0b1BlcnNvbihyOmFueSk6IFBsYWNle1xuICBsZXQgcGxhY2UgPSA8UGxhY2U+KHtcbiAgICBpZDogci5pbnNwZWN0aW9uX2lkLFxuICAgIGRiYV9uYW1lOiByLmRiYV9uYW1lLFxuICAgIGluc3BlY3Rpb25fdHlwZTogci5pbnNwZWN0aW9uX3R5cGUsXG4gICAgbGljZW5zZTogci5saWNlbnNlXyxcbiAgICBmYWNpbGl0eV90eXBlOiByLmZhY2lsaXR5X3R5cGUsXG4gICAgcmVzdWx0czogci5yZXN1bHRzLFxuICAgIHZpb2xhdGlvbnM6IHIudmlvbGF0aW9uc1xuICB9KTtcbiAgcmV0dXJuIHBsYWNlO1xufVxuXG5mdW5jdGlvbiBtYXBQZXJzb24ocmVzcG9uc2U6UmVzcG9uc2UpOiBQbGFjZXtcbiAgIC8vIHRvUGVyc29uIGxvb2tzIGp1c3QgbGlrZSBpbiB0aGUgcHJldmlvdXMgZXhhbXBsZVxuICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKS5tYXAodG9QZXJzb24pXG59XG5cbi8vIHRoaXMgY291bGQgYWxzbyBiZSBhIHByaXZhdGUgbWV0aG9kIG9mIHRoZSBjb21wb25lbnQgY2xhc3NcbmZ1bmN0aW9uIGhhbmRsZUVycm9yIChlcnJvcjogYW55KSB7XG4gIC8vIGxvZyBlcnJvclxuICAvLyBjb3VsZCBiZSBzb21ldGhpbmcgbW9yZSBzb2Zpc3RpY2F0ZWRcbiAgbGV0IGVycm9yTXNnID0gZXJyb3IubWVzc2FnZSB8fCBgWWlrZXMhIFRoZXJlIHdhcyBhIHByb2JsZW0gd2l0aCB0aGUgc2VydmljZSBjYWxsIGFuZCB3ZSBjb3VsZG4ndCByZXRyaWV2ZSB5b3VyIGRhdGEhYFxuICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcblxuICAvLyB0aHJvdyBhbiBhcHBsaWNhdGlvbiBsZXZlbCBlcnJvclxuICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvck1zZyk7XG59XG5cbiJdfQ==
