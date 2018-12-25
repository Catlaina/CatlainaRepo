import { Component, OnInit } from '@angular/core';
import { WorkshopService } from '../workshop.service';
import { Workshop } from '../workshop';

@Component({
  selector: 'app-create-workshop',
  templateUrl: './create-workshop.component.html',
  styleUrls: ['./create-workshop.component.css']
})
export class CreateWorkshopComponent implements OnInit {

  private _workshopService: WorkshopService;

  constructor(service:WorkshopService) { 
    this._workshopService = service;
  }

  ngOnInit() {
  }

  submit(form){
    let workshop:Workshop = new Workshop (0, form.value.workshopTitle, form.value.startDate, form.value.location);
    this._workshopService.add(workshop);
  }

}
