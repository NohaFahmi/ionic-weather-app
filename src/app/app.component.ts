import {Component, effect, OnInit} from '@angular/core';
import {LocationsService} from "./services/locations/locations.service";
import {Storage} from "@ionic/storage-angular";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private locationService: LocationsService) {}

  ngOnInit(): void {
    this.locationService.getUserCurrentPositionCoords();
  }
}
