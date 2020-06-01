import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-trip',
  templateUrl: './request-trip.component.html',
  styleUrls: ['./request-trip.component.scss']
})
export class RequestTripComponent implements OnInit {

  public usersItems = [
    { type: 'Para mi', icon: 'perm_identity', select: true },
    { type: 'Colega', icon: 'people_alt', select: false },
    { type: 'Invitado', icon: 'person_add_alt_1', select: false }
  ];

  public tabsItems = [
    { name: 'Origen', id: '1', select: true, path: 'origin' },
    { name: 'Destino', id: '2', select: false, path: 'destination' },
    { name: '...', id: '3', select: false, path: '' },
    { name: '...', id: '4', select: false, path: '' },
    { name: '...', id: '5', select: false, path: '' },
    { name: '...', id: '6', select: false, path: '' }
  ];

  constructor(
    private _router: Router,
  ) { }

  ngOnInit() {
  }

  public selectMenuItem(item ): void {
    this.tabsItems = this.tabsItems.map((itemMenu) => {
      itemMenu.select = false;
      return itemMenu;
    });
    item.select = true;
    this._router.navigate([`/dashboard/request-trip/${item.path}`]);
  }

}
