import { Injectable } from '@angular/core';
import { Workshop } from './workshop';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkshopService {

  private _workshops : Workshop[] = [
    new Workshop(0, "Some Cool Workshop with great Folks", new Date(2019, 1, 10), "Some nice Place, somewhere."),
    new Workshop(1, "Workshop 1", new Date(2019, 1, 10), "somewhere"),
    new Workshop(2, "Workshop 2", new Date(2019, 1, 10), "somewhere"),
    new Workshop(3, "Workshop 3", new Date(2019, 1, 10), "somewhere"),
    new Workshop(4, "Workshop 4", new Date(2019, 1, 10), "somewhere"),
    new Workshop(5, "Workshop 5", new Date(2019, 1, 10), "somewhere"),
    new Workshop(6, "Workshop 6", new Date(2019, 1, 10), "somewhere"),
    new Workshop(7, "Workshop 7", new Date(2019, 1, 10), "somewhere"),
    new Workshop(8, "Workshop 8", new Date(2019, 1, 10), "somewhere")
  ]


  constructor() { }

  getWorkshops(): Observable<Workshop[]> {
    return of(this._workshops); 
  }

  getWorkshop(id:number): Observable<Workshop>{
    console.log("get Workshop called with id: " + id );
    return of(this._workshops[id]);
  }

  add(workshop: Workshop) {
    console.log("Workshop added: " + workshop);
    workshop.id = this._workshops.length;
    this._workshops.push(workshop);
    console.log ("Workshops now:" + this._workshops) + " ( " + this._workshops.length + "items)";
  }

}
