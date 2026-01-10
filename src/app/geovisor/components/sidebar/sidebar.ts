import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MapService } from '../../services/geovisor.service';
import { CommonModule } from '@angular/common';
import { Capas } from './components/capas/capas';
import { Leyenda } from './components/leyenda/leyenda';

@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    Capas,
    Leyenda,
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  public _geovisorSharedService = inject(MapService);
  public subMenu: 'capas' | 'leyenda'  = 'capas';
  public toogleMenu = false;
  public menuItems: {
    key: 'capas' | 'leyenda';
    icon: string;
    label: string;
  }[] = [
      { key: 'capas', icon: 'layers', label: 'Capas' },
      { key: 'leyenda', icon: 'view_list', label: 'Leyenda' },

    ];

    clickToogleMenu(filtro?: 'capas' | 'leyenda'): void {
      if (filtro == undefined) {
        this.toogleMenu = !this.toogleMenu;
      } else {
        if (this.subMenu == filtro) {
          this.subMenu = filtro;
          this.toogleMenu = !this.toogleMenu;
        }
      }
    }
}
