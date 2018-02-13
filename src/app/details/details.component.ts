import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlaceService } from "../place.service";
import { Place } from "../place";
import { ActivatedRoute, Router, Params } from '@angular/router';
import { LowercasePipe } from '../shared/lowercase.pipe';

@Component({
  moduleId: module.id,
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: []
})
export class DetailsComponent implements OnInit, OnDestroy {
  place: Place;
  sub:any;
  currentPage: number;
  previousUrl: string;
  queryVal: string;

  constructor(private route: ActivatedRoute,
              private placeService: PlaceService,     
              private router: Router) {}

  ngOnInit() { 
   
    this.route.queryParams
        .subscribe(
            (params: Params) => {
                this.queryVal = params['query'];
            } 
        );
    this.sub = this.route.params.subscribe(params => {
       this.currentPage = params['currentPage'];
      let id = params['id'];
      this.placeService
        .get(id)
        .subscribe(p => this.place = p);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList(){
    this.router.navigate(['pages', this.currentPage], { queryParams: { query: this.queryVal } });
  }

}
