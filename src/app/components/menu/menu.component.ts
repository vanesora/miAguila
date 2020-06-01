import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItems } from 'src/app/models/manuItems.model';
import { ConfigurationService } from 'src/app/services/configuration.service';

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
    public configService: ConfigurationService
  ) { }

  ngOnInit() {
  }

  public selectMenuItem(item: MenuItems): void {
    const double = this.menuItems.find(itemFind => item === itemFind);
    if (double.select === true) {
      this.configService.selectItem = false;
      item.select = false;
      this._router.navigate(['/dashboard']);
      return;
    }
    this.configService.selectItem = true;
    this.menuItems = this.menuItems.map((itemMenu) => {
      itemMenu.select = false;
      return itemMenu;
    });
    item.select = true;    
    this._router.navigate([`/dashboard/${item.path}`]);
  }

}
