import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private map!: L.Map;

  initMap(element: HTMLElement): void {
    this.map = L.map(element, { zoomControl: false }).setView([-12.099, -77.035], 15);

    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 22,
      maxNativeZoom: 19
    }).addTo(this.map);

    L.tileLayer.wms('http://192.168.100.21:8080/geoserver/wms', {
      layers: 'limite_distrital',
      format: 'image/png',
      transparent: true,
      maxZoom: 22,
      minZoom: 15,
      opacity: 1.0
    }).addTo(this.map);
  }
}
