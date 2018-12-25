import { Component, OnInit } from '@angular/core';
import { Workshop } from '../workshop'
import { WorkshopService } from '../workshop.service';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})
export class WorkshopComponent implements OnInit {

  private _workshopService:WorkshopService;

  private _workshop : Workshop;
  public get workshop(){
    return this._workshop;
  }
  
  constructor(workshopService: WorkshopService ) {
    this._workshopService= workshopService;
  }

  ngOnInit() {
    this.getWorkshop(0);
  }

  private getWorkshop(id:number){
    this._workshop = this._workshopService.getWorkshop(id);
  }
}
