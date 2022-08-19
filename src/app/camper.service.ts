import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CamperCreate } from './camper-form/CamperCreate';
import { Camper } from './campers-page/Camper';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CamperService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) {}

  getCampers(): Observable<Camper[]> {
    return this.httpClient.get<Camper[]>(`${this.apiServerUrl}/campers`);
  }

  addCamper(camper: CamperCreate): Observable<Camper> {
    return this.httpClient.post<Camper>(`${this.apiServerUrl}/campers`, camper);
  }
}
