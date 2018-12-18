import { Component, OnInit } from '@angular/core';
import { WorkshopActivityService, WorkshopActivity} from '../workshop-activity/workshop-activity.service';

@Component({
  selector: 'app-workshop-activities',
  templateUrl: './workshop-activities.component.html',
  styleUrls: ['./workshop-activities.component.css']
})
export class WorkshopActivitiesComponent implements OnInit {

  private _activityService:WorkshopActivityService;

  constructor(activityServce:WorkshopActivityService) {
    this._activityService = activityServce;
   }

   get activities(){
     return this._activityService.getActivities();
   }

  ngOnInit() {
  }

}
