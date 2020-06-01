import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/app/services/configuration.service';
import { MapsService } from 'src/app/services/maps.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public position;

  constructor(
    public configService: ConfigurationService,
    public mapService: MapsService
  ) { }

  ngOnInit() {
    this.mapService.getLocation();
    this.mapService.getDirection();
  }

}
