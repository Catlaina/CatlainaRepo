import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workshop-activity',
  templateUrl: './workshop-activity.component.html',
  styleUrls: ['./workshop-activity.component.css']
})
export class WorkshopActivityComponent implements OnInit {

  private _title:string;
  private _durationMinutes:number;
  
  public get title() {
    return this._title;
  }
  public set title(value) {
    this._title = value;
  }
  
  public get durationMinutes() {
    return this._durationMinutes;
  }
  public set durationMinutes(value) {
    this._durationMinutes = value;
  }
  agendaDesctiption = "Activity blablabla";
  facilitationNotes = "Lorem Ipsum dolor sit Amet";
  requiredMaterial = "2 FlipCharts, 1 Whiteboard, 1 Pinboard";

  constructor() { 
    this._title = "Activity Title";
    this._durationMinutes  = 90;
  }

  ngOnInit() {
  }

}
