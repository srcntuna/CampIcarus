import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Camper } from '../camper-form/Camper';
import { CamperService } from '../camper.service';

@Component({
  selector: 'app-camper-detail',
  templateUrl: './camper-detail.component.html',
  styleUrls: ['./camper-detail.component.css'],
})
export class CamperDetailComponent implements OnInit {
  camper: Camper | undefined;

  constructor(
    private route: ActivatedRoute,
    private camperService: CamperService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCamper();
  }

  getCamper(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.camperService.getCamper(id).subscribe((camper) => (this.camper = camper));
  }

  save(): void {
    if (this.camper) {
      // this.camperService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }
}
