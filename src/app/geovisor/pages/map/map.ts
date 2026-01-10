import { Component, AfterViewInit, ViewChild, ElementRef, inject } from '@angular/core';
import { MapService } from '../../services/geovisor.service';

import { Navbar } from './../../components/navbar/navbar';

@Component({
  selector: 'app-map',
  imports: [
    Navbar
  ],
  templateUrl: './map.html',
  styleUrl: './map.css',
})
export class Map implements AfterViewInit {
  @ViewChild('map') mapContainer!: ElementRef;
  private mapService = inject(MapService);

  ngAfterViewInit(): void {
    this.mapService.initMap(this.mapContainer.nativeElement);
  }
}
