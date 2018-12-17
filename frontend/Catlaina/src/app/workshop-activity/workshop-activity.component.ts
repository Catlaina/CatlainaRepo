import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workshop-activity',
  templateUrl: './workshop-activity.component.html',
  styleUrls: ['./workshop-activity.component.css']
})
export class WorkshopActivityComponent implements OnInit {

  private _title:string;
  public get title() {
    return this._title;
  }
  // public set title(value) {
  //   this._title = value;
  // }

  private _durationMinutes:number;
  public get durationMinutes() {
    return this._durationMinutes;
  }
  // public set durationMinutes(value) {
  //   this._durationMinutes = value;
  // }
  
  private _agendaDesctiption:string;
  public get agendaDesctiption() {
    return this._agendaDesctiption;
  }
  // public set agendaDesctiption(value) {
  //   this._agendaDesctiption = value;
  // }

  private _facilitationNotes:string;
  public get facilitationNotes() {
    return this._facilitationNotes;
  }
  // public set facilitationNotes(value) {
  //   this._facilitationNotes = value;
  // }
  
  private _requiredMaterial:string;
  public get requiredMaterial() {
    return this._requiredMaterial;
  }
  public set requiredMaterial(value) {
    this._requiredMaterial = value;
  }

  constructor() { 
    this._title = "Activity Title";
    this._durationMinutes  = 90;
    this._agendaDesctiption = "Activity blablabla";
    this._facilitationNotes  = "Lorem Ipsum dolor sit Amet";
    this._requiredMaterial = "2 FlipCharts, 1 Whiteboard, 1 Pinboard";
  }

  ngOnInit() {
  }

}
