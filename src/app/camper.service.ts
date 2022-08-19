import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Camper } from './campers-page/camper';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class CamperService {

  private apiServerUrl = environment.apiBaseUrl;



  constructor(private httpClient: HttpClient) {

  }


  getCampers(): Observable<Camper[]> {
    return this.httpClient.get<Camper[]>(`${this.apiServerUrl}/campers`);
  }

  addCamper(camper: Camper):Observable<Camper> {
    return this.httpClient.post<Camper>(`${this.apiServerUrl}/campers`,camper);
  }

}
