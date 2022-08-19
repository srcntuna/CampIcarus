import { Component, OnInit } from '@angular/core';
import { Camper } from '../campers-page/camper';

@Component({
  selector: 'app-camper-form',
  templateUrl: './camper-form.component.html',
  styleUrls: ['./camper-form.component.css'],
})
export class CamperFormComponent implements OnInit {
  camper: Camper = {
    id: 0,
    name: '',
    age: 0,
  };

  constructor() {}

  ngOnInit(): void {}
}
