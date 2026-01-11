import { Injectable } from '@angular/core';
import * as L from 'leaflet';

export interface LayerData {
  id: string;
  name: string;
  visible: boolean;
  layer: L.Layer;
}

export interface LayerGroup {
  name: string;
  layers: LayerData[];
}

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private map!: L.Map;
  public layerGroups: LayerGroup[] = [];

  initMap(element: HTMLElement): void {
    this.map = L.map(element, { zoomControl: false }).setView([-12.099, -77.035], 15);

    const baseLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 22,
      maxNativeZoom: 19
    });
    baseLayer.addTo(this.map);

    const streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const wmsLayer = L.tileLayer.wms('http://192.168.100.21:8080/geoserver/wms', {
      layers: 'limite_distrital',
      format: 'image/png',
      transparent: true,
      maxZoom: 22,
      minZoom: 15,
      opacity: 1.0
    });
    wmsLayer.addTo(this.map);

    this.layerGroups = [
      {
        name: 'MAPAS BASE',
        layers: [
          { id: 'base', name: 'IMAGEN SATELITAL', visible: true, layer: baseLayer },
          { id: 'streets', name: 'MAPA DE CALLES', visible: false, layer: streetLayer }
        ]
      },
      {
        name: 'CAPAS CARTOGRAFICAS',
        layers: [
          { id: 'distritos', name: 'LIMITE DISTRITAL', visible: true, layer: wmsLayer }
        ]
      }
    ];
  }

  toggleVisibility(layerId: string, visible: boolean) {
    let layerData: LayerData | undefined;
    let isBaseMap = false;
    let groupLayers: LayerData[] = [];

    for (const group of this.layerGroups) {
      layerData = group.layers.find(l => l.id === layerId);
      if (layerData) {
        isBaseMap = group.name === 'MAPAS BASE';
        if (isBaseMap) {
          groupLayers = group.layers;
        }
        break;
      }
    }

    if (layerData) {
      if (isBaseMap && visible) {
        groupLayers.forEach(l => {
          if (l.id !== layerId && l.visible) {
            l.visible = false;
            this.map.removeLayer(l.layer);
          }
        });
      }

      layerData.visible = visible;
      if (visible) {
        this.map.addLayer(layerData.layer);
        if (isBaseMap && layerData.layer instanceof L.TileLayer) {
          layerData.layer.bringToBack();
        }
      } else {
        this.map.removeLayer(layerData.layer);
      }
    }
  }
}
