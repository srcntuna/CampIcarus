import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCamperComponent } from './search-camper.component';

describe('SearchCamperComponent', () => {
  let component: SearchCamperComponent;
  let fixture: ComponentFixture<SearchCamperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCamperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCamperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
