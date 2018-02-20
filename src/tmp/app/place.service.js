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
        var searchStringVal = "$limit=5&$offset=" + offset + "&$order=inspection_id%20DESC&$where=dba_name";
        var searchTermStringVal = "%20like%20%27%25" + searchTerm.toUpperCase() + "%25%27";
        searchStringVal += searchTermStringVal;
        var places$ = this.http
            .get("" + (this.baseUrl + searchStringVal), { headers: this.getHeaders() })
            .map(mapPersons)
            .catch(handleError);
        return places$;
    };
    PlaceService.prototype.get = function (id) {
        var searchStringVal = "$where=inspection_id=" + id;
        var place$ = this.http
            .get("" + (this.baseUrl + searchStringVal), { headers: this.getHeaders() })
            .map(mapPerson)
            .catch(handleError);
        return place$;
    };
    PlaceService.prototype.getHeaders = function () {
        // I included these headers because otherwise FireFox
        // will request text/html
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QyxDQUFDO0FBQ3hDLENBQUM7QUFFRCw2REFBNkQ7QUFDN0QscUJBQXNCLEtBQVU7SUFDOUIsWUFBWTtJQUNaLHVDQUF1QztJQUN2QyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxJQUFJLHNGQUFzRixDQUFDO0lBQ3ZILE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFeEIsbUNBQW1DO0lBQ25DLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNwQyxDQUFDIiwiZmlsZSI6ImFwcC9wbGFjZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UsIFJlcXVlc3RPcHRpb25zLCBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xuXG5pbXBvcnQgeyBQbGFjZSB9IGZyb20gJy4vcGxhY2UnO1xuXG5jb25zdCBQTEFDRVM6IFBsYWNlW10gPSBbXTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBsYWNlU2VydmljZSB7XG5cbiBiYXNlVXJsID0gJ2h0dHBzOi8vZGF0YS5jaXR5b2ZjaGljYWdvLm9yZy9yZXNvdXJjZS9jd2lnLW1hN3guanNvbj8nO1xuXG4gY29uc3RydWN0b3IgKHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuICBwdWJsaWMgZ2V0QWxsKHNlYXJjaFRlcm0sIHBhZ2UpOiBPYnNlcnZhYmxlPFBsYWNlW10+IHtcbiAgICBjb25zdCBvZmZzZXQgPSAocGFnZSAtIDEpICogNTtcbiAgICBsZXQgc2VhcmNoU3RyaW5nVmFsID0gYCRsaW1pdD01JiRvZmZzZXQ9JHtvZmZzZXR9JiRvcmRlcj1pbnNwZWN0aW9uX2lkJTIwREVTQyYkd2hlcmU9ZGJhX25hbWVgO1xuICAgIGxldCBzZWFyY2hUZXJtU3RyaW5nVmFsID0gYCUyMGxpa2UlMjAlMjclMjUke3NlYXJjaFRlcm0udG9VcHBlckNhc2UoKX0lMjUlMjdgO1xuICAgIHNlYXJjaFN0cmluZ1ZhbCArPSBzZWFyY2hUZXJtU3RyaW5nVmFsO1xuICAgIGxldCBwbGFjZXMkID0gdGhpcy5odHRwXG4gICAgICAuZ2V0KGAke3RoaXMuYmFzZVVybCArIHNlYXJjaFN0cmluZ1ZhbH1gLCB7IGhlYWRlcnM6IHRoaXMuZ2V0SGVhZGVycygpfSlcbiAgICAgIC5tYXAobWFwUGVyc29ucylcbiAgICAgIC5jYXRjaChoYW5kbGVFcnJvcik7XG4gICAgICByZXR1cm4gcGxhY2VzJDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8UGxhY2U+IHtcbiAgICBsZXQgc2VhcmNoU3RyaW5nVmFsID0gYCR3aGVyZT1pbnNwZWN0aW9uX2lkPSR7aWR9YDtcbiAgICBsZXQgcGxhY2UkID0gdGhpcy5odHRwXG4gICAgICAuZ2V0KGAke3RoaXMuYmFzZVVybCArIHNlYXJjaFN0cmluZ1ZhbH1gLCB7aGVhZGVyczogdGhpcy5nZXRIZWFkZXJzKCl9KVxuICAgICAgLm1hcChtYXBQZXJzb24pXG4gICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpO1xuICAgICAgcmV0dXJuIHBsYWNlJDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGVhZGVycygpIHtcbiAgICAvLyBJIGluY2x1ZGVkIHRoZXNlIGhlYWRlcnMgYmVjYXVzZSBvdGhlcndpc2UgRmlyZUZveFxuICAgIC8vIHdpbGwgcmVxdWVzdCB0ZXh0L2h0bWxcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgcmV0dXJuIGhlYWRlcnM7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwUGVyc29ucyhyZXNwb25zZTogUmVzcG9uc2UpOiBQbGFjZVtdIHtcblxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpLm1hcCh0b1BlcnNvbik7XG59XG5cbmZ1bmN0aW9uIHRvUGVyc29uKHI6IGFueSk6IFBsYWNlIHtcbiAgbGV0IHBsYWNlID0gPFBsYWNlPih7XG4gICAgaWQ6IHIuaW5zcGVjdGlvbl9pZCxcbiAgICBkYmFfbmFtZTogci5kYmFfbmFtZSxcbiAgICBpbnNwZWN0aW9uX3R5cGU6IHIuaW5zcGVjdGlvbl90eXBlLFxuICAgIGxpY2Vuc2U6IHIubGljZW5zZV8sXG4gICAgZmFjaWxpdHlfdHlwZTogci5mYWNpbGl0eV90eXBlLFxuICAgIHJlc3VsdHM6IHIucmVzdWx0cyxcbiAgICB2aW9sYXRpb25zOiByLnZpb2xhdGlvbnNcbiAgfSk7XG4gIHJldHVybiBwbGFjZTtcbn1cblxuZnVuY3Rpb24gbWFwUGVyc29uKHJlc3BvbnNlOiBSZXNwb25zZSk6IFBsYWNlIHtcbiAgIC8vIHRvUGVyc29uIGxvb2tzIGp1c3QgbGlrZSBpbiB0aGUgcHJldmlvdXMgZXhhbXBsZVxuICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKS5tYXAodG9QZXJzb24pO1xufVxuXG4vLyB0aGlzIGNvdWxkIGFsc28gYmUgYSBwcml2YXRlIG1ldGhvZCBvZiB0aGUgY29tcG9uZW50IGNsYXNzXG5mdW5jdGlvbiBoYW5kbGVFcnJvciAoZXJyb3I6IGFueSkge1xuICAvLyBsb2cgZXJyb3JcbiAgLy8gY291bGQgYmUgc29tZXRoaW5nIG1vcmUgc29maXN0aWNhdGVkXG4gIGxldCBlcnJvck1zZyA9IGVycm9yLm1lc3NhZ2UgfHwgYFlpa2VzISBUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggdGhlIHNlcnZpY2UgY2FsbCBhbmQgd2UgY291bGRuJ3QgcmV0cmlldmUgeW91ciBkYXRhIWA7XG4gIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xuXG4gIC8vIHRocm93IGFuIGFwcGxpY2F0aW9uIGxldmVsIGVycm9yXG4gIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yTXNnKTtcbn1cblxuIl19
