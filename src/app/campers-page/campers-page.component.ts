import { Component, OnInit } from '@angular/core';
import { CamperCreate } from '../camper-form/CamperCreate';
import { CamperService } from '../camper.service';
import { Camper } from './Camper';

@Component({
  selector: 'app-campers-page',
  templateUrl: './campers-page.component.html',
  styleUrls: ['./campers-page.component.css'],
})
export class CampersPageComponent implements OnInit {
  campers: Camper[] = [];

  constructor(private camperService: CamperService) {}

  ngOnInit(): void {
    this.camperService.getCampers().subscribe((data) => (this.campers = data));
  }

  receiveNewCamper(newCamper: Camper) {
    this.campers.push(newCamper);
  }
}
