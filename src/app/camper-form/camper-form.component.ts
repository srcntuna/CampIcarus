import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CamperService } from '../camper.service';
import { Camper } from '../campers-page/Camper';
import { CamperCreate } from './CamperCreate';

@Component({
  selector: 'app-camper-form',
  templateUrl: './camper-form.component.html',
  styleUrls: ['./camper-form.component.css'],
})
export class CamperFormComponent implements OnInit {
  camper: Camper = {
    name: '',
    age: 0,
  };

  @Output() newCamper: EventEmitter<Camper> = new EventEmitter();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private camperService: CamperService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.camper = new Camper();

    debugger;
    this.camperService
      .addCamper(this.camper)
      .subscribe((result) => console.log(result));

    this.newCamper.emit(this.camper);
  }
}
