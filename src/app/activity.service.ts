import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from './activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private activitiesUrl: string;
  private activity: Activity = {
    id: "", 
    name: "", 
    difficulty: "", 
  };

  constructor(private http: HttpClient) { 
    this.activitiesUrl = "http://localhost:8080/activities";
  }


  public findAll(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.activitiesUrl);
  }
}
