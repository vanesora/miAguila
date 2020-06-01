import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RequestTripComponent } from './pages/dashboard/request-trip/request-trip.component';
import { OriginComponent } from './pages/dashboard/request-trip/origin/origin.component';
import { DestinationComponent } from './pages/dashboard/request-trip/destination/destination.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RequestTripComponent,
    OriginComponent,
    DestinationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
