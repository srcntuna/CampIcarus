import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamperDetailComponent } from './camper-detail.component';

describe('CamperDetailComponent', () => {
  let component: CamperDetailComponent;
  let fixture: ComponentFixture<CamperDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamperDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamperDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
