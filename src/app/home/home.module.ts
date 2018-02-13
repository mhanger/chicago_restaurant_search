import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './index';
import { Place } from '../place';
import { PlaceService } from "../place.service";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TruncatePipe } from '../shared/truncate.pipe';

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpModule, RouterModule],
    declarations: [
        HomeComponent, TruncatePipe
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {
}
