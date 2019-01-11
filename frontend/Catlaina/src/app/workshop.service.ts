import { Injectable } from '@angular/core';
import { Workshop } from './workshop';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkshopService {

   private _workshops: Workshop[] ;
  // private _workshops: Workshop[] = [
  //   new Workshop(0, "Some Cool Workshop with great Folks", new Date(2019, 1, 10), "Some nice Place, somewhere."),
  //   new Workshop(1, "Workshop 1", new Date(2019, 1, 10), "somewhere"),
  //   new Workshop(2, "Workshop 2", new Date(2019, 1, 10), "somewhere"),
  //   new Workshop(3, "Workshop 3", new Date(2019, 1, 10), "somewhere"),
  //   new Workshop(4, "Workshop 4", new Date(2019, 1, 10), "somewhere"),
  //   new Workshop(5, "Workshop 5", new Date(2019, 1, 10), "somewhere"),
  //   new Workshop(6, "Workshop 6", new Date(2019, 1, 10), "somewhere"),
  //   new Workshop(7, "Workshop 7", new Date(2019, 1, 10), "somewhere"),
  //   new Workshop(8, "Workshop 8", new Date(2019, 1, 10), "somewhere")
  // ]

  private apiUrl = 'http://localhost:3000/api';
  private workshopUrl = this.apiUrl + '/workshops';  // URL to web api

  constructor(private httpClient: HttpClient) { }


    
  getWorkshops(): Observable<Workshop[]> {
    console.log("fetching workshops from httpClient");
    return this.httpClient.get<Workshop[]>(this.workshopUrl)
      .pipe(
        map(res => {
          return res["data"].docs as Workshop[];
        }),
        tap(_ =>  console.log('Workshop Service: fetched heroes')),
        catchError(this.handleError('getWorkshops', []))
      );
    // console.log("Got workshops from HttpClient: ");
    // console.log(ws);
    // return ws;
  }

  getWorkshop(id: String): Observable<Workshop> {
    console.log("get Workshop called with id: " + id);
    return of(this._workshops.find(workshop => workshop.id == id));
  }

  add(workshop: Workshop) {
    console.log("Workshop added: " + workshop);
    workshop.id = this._workshops.length.toString();
    this._workshops.push(workshop);
    console.log("Workshops now:" + this._workshops) + " ( " + this._workshops.length + "items)";
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
