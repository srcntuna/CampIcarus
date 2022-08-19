import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampersPageComponent } from './campers-page.component';

describe('CampersPageComponent', () => {
  let component: CampersPageComponent;
  let fixture: ComponentFixture<CampersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampersPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
