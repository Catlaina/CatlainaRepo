import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopActivitiesComponent } from './workshop-activities.component';

describe('WorkshopActivitiesComponent', () => {
  let component: WorkshopActivitiesComponent;
  let fixture: ComponentFixture<WorkshopActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
