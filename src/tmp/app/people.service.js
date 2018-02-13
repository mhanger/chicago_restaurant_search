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
var PEOPLE = [];
var PeopleService = /** @class */ (function () {
    function PeopleService(http) {
        this.http = http;
        this.baseUrl = 'https://data.cityofchicago.org/resource/cwig-ma7x.json?';
    }
    PeopleService.prototype.getAll = function (searchTerm, page) {
        var offset = (page - 1) * 5;
        var searchStringVal = "$limit=5&$offset=" + offset + "&$order=inspection_id%20DESC&$where=dba_name%20like%20%27%25" + searchTerm.toUpperCase() + "%25%27";
        var people$ = this.http
            .get("" + (this.baseUrl + searchStringVal), { headers: this.getHeaders() })
            .map(mapPersons)
            .catch(handleError);
        return people$;
    };
    PeopleService.prototype.getHeaders = function () {
        // I included these headers because otherwise FireFox
        // will request text/html
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    PeopleService.prototype.get = function (id) {
        var searchStringVal = "$where=inspection_id=" + id;
        var person$ = this.http
            .get("" + (this.baseUrl + searchStringVal), { headers: this.getHeaders() })
            .map(mapPerson)
            .catch(handleError);
        return person$;
    };
    PeopleService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], PeopleService);
    return PeopleService;
}());
exports.PeopleService = PeopleService;
function mapPersons(response) {
    return response.json().map(toPerson);
}
function toPerson(r) {
    var person = ({
        id: r.inspection_id,
        dba_name: r.dba_name,
        inspection_type: r.inspection_type,
        license: r.license_,
        facility_type: r.facility_type,
        results: r.results,
        violations: r.violations
    });
    return person;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LHVDQUF1QztJQUN2QyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxJQUFJLHNGQUFzRixDQUFBO0lBQ3RILE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFeEIsbUNBQW1DO0lBQ25DLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNwQyxDQUFDIiwiZmlsZSI6ImFwcC9wZW9wbGUuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBSZXF1ZXN0T3B0aW9ucywgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcblxuaW1wb3J0IHsgUGVyc29uIH0gZnJvbSAnLi9wZXJzb24nO1xuXG5jb25zdCBQRU9QTEUgOiBQZXJzb25bXSA9IFtcbiAgICAgXG4gICAgXTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBlb3BsZVNlcnZpY2V7XG5cbiBwcml2YXRlIGJhc2VVcmw6IHN0cmluZyA9ICdodHRwczovL2RhdGEuY2l0eW9mY2hpY2Fnby5vcmcvcmVzb3VyY2UvY3dpZy1tYTd4Lmpzb24/JztcbiBcbiBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHAgOiBIdHRwKXtcbiAgfVxuXG4gIGdldEFsbChzZWFyY2hUZXJtLCBwYWdlKTogT2JzZXJ2YWJsZTxQZXJzb25bXT57ICBcbiAgICBjb25zdCBvZmZzZXQgPSAocGFnZSAtIDEpICogNTtcbiAgICBsZXQgc2VhcmNoU3RyaW5nVmFsID0gYCRsaW1pdD01JiRvZmZzZXQ9JHtvZmZzZXR9JiRvcmRlcj1pbnNwZWN0aW9uX2lkJTIwREVTQyYkd2hlcmU9ZGJhX25hbWUlMjBsaWtlJTIwJTI3JTI1JHtzZWFyY2hUZXJtLnRvVXBwZXJDYXNlKCl9JTI1JTI3YDtcbiAgICBsZXQgcGVvcGxlJCA9IHRoaXMuaHR0cFxuICAgICAgLmdldChgJHt0aGlzLmJhc2VVcmwrc2VhcmNoU3RyaW5nVmFsfWAsIHsgaGVhZGVyczogdGhpcy5nZXRIZWFkZXJzKCl9KVxuICAgICAgLm1hcChtYXBQZXJzb25zKVxuICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKTtcbiAgICAgIHJldHVybiBwZW9wbGUkO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRIZWFkZXJzKCl7XG4gICAgLy8gSSBpbmNsdWRlZCB0aGVzZSBoZWFkZXJzIGJlY2F1c2Ugb3RoZXJ3aXNlIEZpcmVGb3hcbiAgICAvLyB3aWxsIHJlcXVlc3QgdGV4dC9odG1sXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIHJldHVybiBoZWFkZXJzO1xuICB9XG5cbiAgZ2V0KGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPFBlcnNvbj57XG4gICAgbGV0IHNlYXJjaFN0cmluZ1ZhbCA9IGAkd2hlcmU9aW5zcGVjdGlvbl9pZD0ke2lkfWA7XG4gICAgbGV0IHBlcnNvbiQgPSB0aGlzLmh0dHBcbiAgICAgIC5nZXQoYCR7dGhpcy5iYXNlVXJsK3NlYXJjaFN0cmluZ1ZhbH1gLCB7aGVhZGVyczogdGhpcy5nZXRIZWFkZXJzKCl9KVxuICAgICAgLm1hcChtYXBQZXJzb24pXG4gICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpO1xuICAgICAgcmV0dXJuIHBlcnNvbiQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwUGVyc29ucyhyZXNwb25zZTpSZXNwb25zZSk6IFBlcnNvbltde1xuXG4gIHJldHVybiByZXNwb25zZS5qc29uKCkubWFwKHRvUGVyc29uKVxufVxuXG5mdW5jdGlvbiB0b1BlcnNvbihyOmFueSk6IFBlcnNvbntcbiAgbGV0IHBlcnNvbiA9IDxQZXJzb24+KHtcbiAgICBpZDogci5pbnNwZWN0aW9uX2lkLFxuICAgIGRiYV9uYW1lOiByLmRiYV9uYW1lLFxuICAgIGluc3BlY3Rpb25fdHlwZTogci5pbnNwZWN0aW9uX3R5cGUsXG4gICAgbGljZW5zZTogci5saWNlbnNlXyxcbiAgICBmYWNpbGl0eV90eXBlOiByLmZhY2lsaXR5X3R5cGUsXG4gICAgcmVzdWx0czogci5yZXN1bHRzLFxuICAgIHZpb2xhdGlvbnM6IHIudmlvbGF0aW9uc1xuICB9KTtcbiAgcmV0dXJuIHBlcnNvbjtcbn1cblxuZnVuY3Rpb24gbWFwUGVyc29uKHJlc3BvbnNlOlJlc3BvbnNlKTogUGVyc29ue1xuICAgLy8gdG9QZXJzb24gbG9va3MganVzdCBsaWtlIGluIHRoZSBwcmV2aW91cyBleGFtcGxlXG4gICByZXR1cm4gcmVzcG9uc2UuanNvbigpLm1hcCh0b1BlcnNvbilcbn1cblxuLy8gdGhpcyBjb3VsZCBhbHNvIGJlIGEgcHJpdmF0ZSBtZXRob2Qgb2YgdGhlIGNvbXBvbmVudCBjbGFzc1xuZnVuY3Rpb24gaGFuZGxlRXJyb3IgKGVycm9yOiBhbnkpIHtcbiAgLy8gbG9nIGVycm9yXG4gIC8vIGNvdWxkIGJlIHNvbWV0aGluZyBtb3JlIHNvZmlzdGljYXRlZFxuICBsZXQgZXJyb3JNc2cgPSBlcnJvci5tZXNzYWdlIHx8IGBZaWtlcyEgVGhlcmUgd2FzIGEgcHJvYmxlbSB3aXRoIHRoZSBzZXJ2aWNlIGNhbGwgYW5kIHdlIGNvdWxkbid0IHJldHJpZXZlIHlvdXIgZGF0YSFgXG4gIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xuXG4gIC8vIHRocm93IGFuIGFwcGxpY2F0aW9uIGxldmVsIGVycm9yXG4gIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yTXNnKTtcbn1cblxuIl19
