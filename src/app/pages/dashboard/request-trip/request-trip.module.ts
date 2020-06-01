import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestTripComponent } from './request-trip.component';
import { RequestTripRoutingModule } from './request-trip-routing.module';
import { OriginComponent } from './origin/origin.component';
import { DestinationComponent } from './destination/destination.component';

@NgModule({
  declarations: [
    RequestTripComponent,
    OriginComponent,
    DestinationComponent
  ],
  imports: [
    CommonModule,
    RequestTripRoutingModule,
  ]
})
export class RequestTripModule { }