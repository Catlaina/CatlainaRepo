import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})
export class WorkshopComponent implements OnInit {

  private _workshopTitle: String = "My Workshop";
  public get workshopTitle(): String {
    return this._workshopTitle;
  }
  public set workshopTitle(value: String) {
    this._workshopTitle = value;
  }


  private _startDate: Date = new Date(2019, 0, 9) ;
  public get startDate(): Date {
    return this._startDate;
  }
  public set startDate(value: Date) {
    this._startDate = value;
  }

  private _endDate: Date = new Date(2019, 0, 10);
  public get endDate(): Date {
    return this._endDate;
  }
  public set endDate(value: Date) {
    this._endDate = value;
  }

  private _place: string = "Some very nice Place, Somewhere";
  public get place(): string {
    return this._place;
  }
  public set place(value: string) {
    this._place = value;
  }


  constructor() { }

  ngOnInit() {
  }

}
