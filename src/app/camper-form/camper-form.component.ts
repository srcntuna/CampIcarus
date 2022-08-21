import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateCamper } from '../add-camper/CreateCamper';
import { CamperService } from '../camper.service';
import { Camper } from './Camper';

@Component({
  selector: 'app-camper-form',
  templateUrl: './camper-form.component.html',
  styleUrls: ['./camper-form.component.css'],
})
export class CamperFormComponent implements OnInit {
  newCamper: CreateCamper = {
    name: '',
    age: 0,
  };

  @Output() createNewCamper: EventEmitter<Camper> = new EventEmitter();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private camperService: CamperService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.camperService
      .addCamper(this.newCamper)
      .subscribe((generatedCamper) =>
        this.createNewCamper.emit(generatedCamper)
      );
  }
}
