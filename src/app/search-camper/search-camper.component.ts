import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Camper } from '../camper-form/Camper';
import { CamperService } from '../camper.service';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-camper',
  templateUrl: './search-camper.component.html',
  styleUrls: ['./search-camper.component.css'],
})
export class SearchCamperComponent implements OnInit {
  campers$!: Observable<Camper[]>;
  private searchTerms = new Subject<string>();

  constructor(private camperService: CamperService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {


    this.campers$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.camperService.searchCampers(term))
    );
  }
}
