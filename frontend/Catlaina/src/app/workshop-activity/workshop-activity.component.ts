import { Component, OnInit } from '@angular/core';
import { WorkshopActivity, WorkshopActivityService } from './workshop-activity.service';

@Component({
  selector: 'app-workshop-activity',
  templateUrl: './workshop-activity.component.html',
  styleUrls: ['./workshop-activity.component.css']
})
export class WorkshopActivityComponent implements OnInit {

  private _activitiyService:WorkshopActivityService;

  public get activity(): WorkshopActivity {
    return this._activitiyService.getActivity();

  }

  constructor(activityService:WorkshopActivityService) { 
    this._activitiyService = activityService;
  }

  
  ngOnInit() {
  }

}
