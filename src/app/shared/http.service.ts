import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getList(){
    return this.http.get('https://feedback-eb.herokuapp.com/feedback/list');
  }
  sendFeedback(payLoad): Observable<any> {
    return this.http
    .post<any>('https://feedback-eb.herokuapp.com/feedback/create', payLoad,
     { headers: headers, observe: 'response' }).pipe(
      tap(e => {
        // this.routeToList(e);
      })
    );
  }
  createTraining(trainingdetails): Observable<any> {
    return this.http
    .post<any>('https://feedback-eb.herokuapp.com/trainingdetails/add', trainingdetails,
     { headers: headers, observe: 'response' }).pipe(
      tap(e => {
        // this.routeToList(e);
      })
    );
  }
  getTrainingList() {
    return this.http.get('https://feedback-eb.herokuapp.com/trainingdetails/list');
  }
  getTrainingDetails(trainingId) {
    return this.http.get('https://feedback-eb.herokuapp.com/trainingdetails/details/'+trainingId);
  }
}

