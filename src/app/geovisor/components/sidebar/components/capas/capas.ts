import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MapService } from '../../../../services/geovisor.service';

@Component({
  selector: 'app-capas',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCheckboxModule, MatExpansionModule],
  templateUrl: './capas.html',
  styleUrl: './capas.css',
})
export class Capas {
  public mapService = inject(MapService);
  public readonly panelOpenState = signal(false);

  toggleLayer(id: string, visible: boolean): void {
    this.mapService.toggleVisibility(id, visible);
  }
}
