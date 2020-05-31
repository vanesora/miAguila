import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuItems = [
    {name: 'Pedir Aguila', select: false, icon: 'check_circle_outline'},
    {name: 'Vuelos', select: false, icon: 'room'},
    {name: 'Rutas', select: false, icon: 'swap_calls'},
    {name: 'Administrar', select: false, icon: 'app_settings_alt'},
    {name: 'Estadísticas', select: false, icon: 'bar_chart'},
    {name: 'Medios de Pago', select: false, icon: 'credit_card'},
    {name: 'Cerrar sesión', select: false, icon: 'logout'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
