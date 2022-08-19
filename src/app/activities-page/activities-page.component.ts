import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activities-page',
  templateUrl: './activities-page.component.html',
  styleUrls: ['./activities-page.component.css']
})
export class ActivitiesPageComponent implements OnInit {

  activities: Activity[] = []; 

  constructor(private activityService: ActivityService) { 

  }

  ngOnInit(): void {
     this.activityService.findAll().subscribe( data => this.activities = data)
  }

}
