import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { CreateCamper } from './add-camper/CreateCamper';
import { Camper } from './camper-form/Camper';
import { environment } from 'src/environments/environment';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CamperService {
  // currentCampers: Camper[];

  currentCampers: Camper[];

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) {}

  setCurrentCampers(campers: Camper[]) {
    this.currentCampers = campers;
  }

  getCurrentCampers(): Observable<Camper[]> {
    return of(this.currentCampers);
  }

  getCampers(): Observable<Camper[]> {
    return this.httpClient.get<Camper[]>(`${this.apiServerUrl}/campers`);
  }

  /** GET hero by id. Will 404 if id not found */
  getCamper(id: number): Observable<Camper> {
    const url = `${this.apiServerUrl}/campers/${id}`;
    return this.httpClient.get<Camper>(url).pipe(
      tap((_) => console.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Camper>(`getCamper id=${id}`))
    );
  }

  addCamper(camper: CreateCamper): Observable<Camper> {
    return this.httpClient.post<Camper>(`${this.apiServerUrl}/campers`, camper);
  }

  searchCampers(term: string): Observable<Camper[]> {
    if (term.trim().length === 0) {
      // if not search term, return empty hero array.
      return this.getCampers();
    }
    return this.httpClient
      .get<Camper[]>(`${this.apiServerUrl}/campers?name=${term}`)
      .pipe(
        tap((x) =>
          x.length
            ? console.log(`found campers matching "${term}"`)
            : console.log(`no campers matching "${term}"`)
        ),
        catchError(this.handleError<Camper[]>('searchCampers', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
