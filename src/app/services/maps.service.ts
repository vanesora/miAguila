import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  public location = {};
  public dir = undefined;

  constructor() { }

  public getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.location = position.coords;
        console.log(position.coords);
      });
    }
  }

  public getDirection() {
    this.dir = {
      origin: { lat: 4.7040948, lng: -74.20514229 },
      destination: { lat: 4.5921339, lng: -74.1260522 }
    };
  }
}

