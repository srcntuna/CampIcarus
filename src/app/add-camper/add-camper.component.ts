import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CamperService } from '../camper.service';
import { CreateCamper } from './CreateCamper';

@Component({
  selector: 'app-add-camper',
  templateUrl: './add-camper.component.html',
  styleUrls: ['./add-camper.component.css'],
})
export class AddCamperComponent implements OnInit {
  camper: CreateCamper = {
    name: '',
    age: 0,
  };


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private camperService: CamperService
  ) {}

  ngOnInit(): void {}


}
