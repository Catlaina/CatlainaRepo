import { Component, OnInit } from '@angular/core';
import { Workshop } from '../workshop'
import { WorkshopService } from '../workshop.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})
export class WorkshopComponent implements OnInit {

  private _workshopService:WorkshopService;
  private _route:ActivatedRoute;
  private _location:Location;

  private _workshop : Workshop;
  public get workshop(){
    return this._workshop;
  }
  
  constructor(workshopService: WorkshopService, route: ActivatedRoute, location:Location ) {
    this._workshopService= workshopService;
    this._route = route;
    this._location = location;
  }

  ngOnInit() {
    this.getWorkshop();
  }

  private getWorkshop():void {
    const id = +this._route.snapshot.paramMap.get('id');
    this._workshopService.getWorkshop(id).subscribe(workshop => this._workshop=workshop);
  }
}
