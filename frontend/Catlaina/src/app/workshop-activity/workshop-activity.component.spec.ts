import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopActivityComponent } from './workshop-activity.component';

describe('WorkshopActivityComponent', () => {
  let component: WorkshopActivityComponent;
  let fixture: ComponentFixture<WorkshopActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
