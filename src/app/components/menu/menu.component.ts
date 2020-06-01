import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItems } from 'src/app/models/manuItems.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItems[] = [
    { name: 'Pedir Aguila', select: false, icon: 'check_circle_outline', path: 'request-trip' },
    { name: 'Vuelos', select: false, icon: 'room', path: '' },
    { name: 'Rutas', select: false, icon: 'swap_calls', path: '' },
    { name: 'Administrar', select: false, icon: 'app_settings_alt', path: '' },
    { name: 'Estadísticas', select: false, icon: 'bar_chart', path: '' },
    { name: 'Medios de Pago', select: false, icon: 'credit_card', path: '' },
    { name: 'Cerrar sesión', select: false, icon: 'logout', path: '' }
  ];

  constructor(
    private _router: Router,
  ) { }

  ngOnInit() {
  }

  public selectMenuItem(item: MenuItems): void {
    this.menuItems = this.menuItems.map((itemMenu) => {
      itemMenu.select = false;
      return itemMenu;
    });
    item.select = true;
    this._router.navigate([`/dashboard/${item.path}`]);
  }

}
