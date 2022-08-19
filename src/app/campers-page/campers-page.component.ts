import { Component, OnInit } from '@angular/core';
import { Camper } from './camper';

@Component({
  selector: 'app-campers-page',
  templateUrl: './campers-page.component.html',
  styleUrls: ['./campers-page.component.css']
})
export class CampersPageComponent implements OnInit {

  campers:Camper[] = [];


  constructor() { }

  ngOnInit(): void {



  }

  

}
