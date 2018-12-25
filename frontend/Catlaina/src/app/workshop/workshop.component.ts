import { Component, OnInit } from '@angular/core';
import { Workshop } from '../workshop'

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})
export class WorkshopComponent implements OnInit {

  private _workshop : Workshop;
  public get workshop(){
    return this._workshop;
  }

  public get workshopTitle(): String {
    return this._workshop.title;
  }

  private _startDate: Date = new Date(2019, 0, 9);
  public get startDate(): Date {
    return this._workshop.date;
  }
  
  private _endDate: Date = new Date(2019, 0, 10);
  public get endDate(): Date {
    return this._endDate;
  }
  public set endDate(value: Date) {
    this._endDate = value;
  }

  public get place(): string {
    return this._workshop.place;
  }
  
  constructor() {
    this._workshop = new Workshop();
    this._workshop.id = 1;
    this._workshop.title = "Some Cool Workshop with great Folks";
    this._workshop.date = new Date(Date.now());
    this._workshop.place = "Some nice Place, somewhere.";
   }

  ngOnInit() {
  }

}
