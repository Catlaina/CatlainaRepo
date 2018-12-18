import { Injectable } from '@angular/core';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class WorkshopActivityService {

  _activity:WorkshopActivity;

  constructor() {
    this._activity = new  WorkshopActivity();
   }

  getActivity() {
    return this._activity;
  }

  getActivities() {
    let activities = [new WorkshopActivity(), new WorkshopActivity(), new WorkshopActivity(), new WorkshopActivity()];
    return activities;
  }
}


export class WorkshopActivity{
  private _title:string;
  public get title() {
    return this._title;
  }
  public set title(value) {
    this._title = value;
  }

  private _durationMinutes:number;
  public get durationMinutes() {
    return this._durationMinutes;
  }
  public set durationMinutes(value) {
    this._durationMinutes = value;
  }
  
  private _agendaDescription:string;
  public get agendaDescription() {
    return this._agendaDescription;
  }
  public set agendaDescription(value) {
    this._agendaDescription = value;
  }

  private _facilitationNotes:string;
  public get facilitationNotes() {
    return this._facilitationNotes;
  }
  public set facilitationNotes(value) {
    this._facilitationNotes = value;
  }
  
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
    this._agendaDescription = "Activity blablabla";
    this._facilitationNotes  = "Lorem Ipsum dolor sit Amet";
    this._requiredMaterial = "2 FlipCharts, 1 Whiteboard, 1 Pinboard";
  } 
}