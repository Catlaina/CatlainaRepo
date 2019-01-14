import { Component, OnInit } from '@angular/core';
import { WorkshopService } from '../workshop.service';
import { Workshop } from '../workshop';

@Component({
  selector: 'app-workshop-list',
  templateUrl: './workshop-list.component.html',
  styleUrls: ['./workshop-list.component.css']
})
export class WorkshopListComponent implements OnInit {

  private _workshopService: WorkshopService;

  private _workshops: Workshop[];

  constructor(service: WorkshopService) {
    this._workshopService = service;
  }


  ngOnInit() {
    this._workshopService.getWorkshops().subscribe(workshops => { 
      this._workshops = workshops; 
    });
  } 

}
