import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { NavbarModule } from './shared';
import { HomeModule } from './home/home.module';

import { PlaceService } from './place.service';
import { DetailsComponent } from './details/details.component';

@NgModule({
    declarations: [
        AppComponent,   
        DetailsComponent
    ],
    imports: [
        BrowserModule,
        NavbarModule,
        HomeModule,
        FormsModule,
        routing
    ],
    providers: [ APP_PROVIDERS, appRoutingProviders, PlaceService ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
