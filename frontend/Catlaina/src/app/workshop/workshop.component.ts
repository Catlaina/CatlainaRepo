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
