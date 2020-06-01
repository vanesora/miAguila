import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestTripComponent } from './request-trip.component';
import { OriginComponent } from './origin/origin.component';
import { DestinationComponent } from './destination/destination.component';

const routes: Routes = [
  {
    path: '',
    component: RequestTripComponent,
    children: [
      {
        path: '',
        redirectTo: 'origin',
        pathMatch: 'full'
      },
      {
        path: 'origin',
        component: OriginComponent
      },
      {
        path: 'destination',
        component: DestinationComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class RequestTripRoutingModule {}
