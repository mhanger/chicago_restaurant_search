import { Component, OnInit } from '@angular/core';
import { Place } from '../place';
import { PlaceService } from '../place.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'as-home',
    templateUrl: 'home.html',
    styleUrls: [
        'home.css'
    ]
})
export class HomeComponent implements OnInit {
    isNoResults = false;
    currentPage = 0;
    testCurrentPage: number;
    isFirstLoad = true;
    existingQueryVal = '';
    isSubmitted = false;
    isEmpty = false;
    queryVal = '';
    places: Place[] = [];
    errorMessage = '';
    isLoading = true;
    showControls = false;

  constructor(private placeService: PlaceService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.testCurrentPage = this.route.snapshot.params.currentPage;
        // console.log('currentPage: ' + this.testCurrentPage);

        this.route.queryParams
        .subscribe(
            (params: {query: string}) => {
              this.existingQueryVal = params.query;
              // console.log('query: ' + params.query);
            }
        );

    if (typeof this.testCurrentPage === 'string') {
        // check if coming back to existing page from detail
        this.currentPage = Number(this.testCurrentPage);
    } else {
        this.currentPage = 1;
    }

    if (typeof this.existingQueryVal !== 'undefined') {
        this.queryVal = this.existingQueryVal;
        this.getData(this.queryVal);
        }
    }

    resetForm() {
        this.queryVal = '';
        this.places = [];
        this.isEmpty = false;
        this.isSubmitted = false;
        this.isNoResults = false;
        this.currentPage = 1;
        this.isFirstLoad = true;
        this.existingQueryVal = '';
        this.isSubmitted = false;
        this.isEmpty = false;
        this.errorMessage = '';
        this.isLoading = true;
        this.showControls = false;
    }

    submitQuery() {
        this.getData(this.queryVal);
    }

    checkQuery(e) {
        this.resetForm();
    }

    nextData() {
        this.currentPage += 1;
        this.getData(this.queryVal);
    }

    prevData() {
        this.currentPage -= 1;
        this.getData(this.queryVal);
    }

    finishedLoading() {
        if (this.places.length < 1) {
            this.isNoResults = true;
        } else {
            setTimeout (() => {
                    this.showControls = true;
                }, 500);
        }
        this.isLoading = false;
    }

    getData(queryVal) {
        if (this.queryVal.length > 0) {
            this.isLoading = true;
            this.isSubmitted = true;
            this.isEmpty = false;
            this.router.navigate(['pages', this.currentPage], { queryParams: { query: this.queryVal } });
            this.placeService
            .getAll(this.queryVal, this.currentPage)
                .subscribe(
                /* happy path */ p => this.places = p,
                /* error path */ e => this.errorMessage = e,
                /* onCompleted */ // () => this.isLoading = false
                () => { this.finishedLoading(); }
            );

            } else {
                this.isEmpty = true;
            }
        }
}
