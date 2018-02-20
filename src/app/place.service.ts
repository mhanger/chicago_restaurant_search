import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Place } from './place';

const PLACES: Place[] = [];

@Injectable()
export class PlaceService {

 baseUrl = 'https://data.cityofchicago.org/resource/cwig-ma7x.json?';

 constructor (private http: Http) {}

  public getAll(searchTerm, page): Observable<Place[]> {
    const offset = (page - 1) * 5;
    let searchStringVal = `$limit=5&$offset=${offset}&$order=inspection_id%20DESC&$where=dba_name`;
    let searchTermStringVal = `%20like%20%27%25${searchTerm.toUpperCase()}%25%27`;
    searchStringVal += searchTermStringVal;
    let places$ = this.http
      .get(`${this.baseUrl + searchStringVal}`, { headers: this.getHeaders()})
      .map(mapPersons)
      .catch(handleError);
      return places$;
  }

  public get(id: number): Observable<Place> {
    let searchStringVal = `$where=inspection_id=${id}`;
    let place$ = this.http
      .get(`${this.baseUrl + searchStringVal}`, {headers: this.getHeaders()})
      .map(mapPerson)
      .catch(handleError);
      return place$;
  }

  private getHeaders() {
    // I included these headers because otherwise FireFox
    // will request text/html
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function mapPersons(response: Response): Place[] {

  return response.json().map(toPerson);
}

function toPerson(r: any): Place {
  let place = <Place>({
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

function mapPerson(response: Response): Place {
   // toPerson looks just like in the previous example
   return response.json().map(toPerson);
}

// this could also be a private method of the component class
function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Yikes! There was a problem with the service call and we couldn't retrieve your data!`;
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}

