import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Workshop } from './workshop';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const workshops : Workshop[] = [
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
  
    return {workshops};
  }

  genId(workshops: Workshop[]): number {
    return workshops.length > 0 ? Math.max(...workshops.map(workshop => workshop.id)) + 1 : 0;
  }

  constructor() { }
}
