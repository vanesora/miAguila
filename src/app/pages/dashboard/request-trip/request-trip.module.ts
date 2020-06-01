import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestTripComponent } from './request-trip.component';
import { RequestTripRoutingModule } from './request-trip-routing.module';
import { OriginComponent } from './origin/origin.component';
import { DestinationComponent } from './destination/destination.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RequestTripComponent,
    OriginComponent,
    DestinationComponent
  ],
  imports: [
    CommonModule,
    RequestTripRoutingModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
  ]
})
export class RequestTripModule { }