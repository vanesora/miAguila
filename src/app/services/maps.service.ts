import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  public location = {};
  public dir = undefined;

  constructor(
    public http: HttpClient
  ) { }

  public getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.location = position.coords;
        console.log(position.coords);
      });
    }
  }

  public getDirection(): Promise<any> {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http
    .get('https://demo9678198.mockable.io/mi-aguila/points', { headers: header})
    .toPromise().then((data) => {
      this.dir = data;
    });
  }
}

