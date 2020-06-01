import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  public address = { name: '', address: '' };

  public deptos = [
    { id: 1, name: 'Cundinamarca' },
    { id: 2, name: 'Santander' },
    { id: 3, name: 'Boyacá' }
  ];

  public favorites = [
    { name: 'Work', address: 'Calle 140h # 10-11 Bogotá, Colombia' },
    { name: 'Home', address: 'Carrera 45 c # 67-73 Bogotá, Colombia' },
    { name: 'Aeropuerto el Dorado', address: 'Bogotá, Colombia' },
    { name: 'mi Aguña', address: 'Carrera 15 80-890, bogotá' },
    { name: 'Centro Mayor', address: 'Carra 30 # 31-2 sur Bogotá, Colombia' },
    { name: 'Universidad Nacional', address: 'Bogotá, Colombia' },
  ];

  constructor() { }

  ngOnInit() {
  }

  public selectFavorite(item): void {
    this.address = item;
  }

}
