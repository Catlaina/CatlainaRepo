import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-workshop',
  templateUrl: './create-workshop.component.html',
  styleUrls: ['./create-workshop.component.css']
})
export class CreateWorkshopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submit(form){
    console.log(form);
  }

}
