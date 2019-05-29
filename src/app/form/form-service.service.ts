import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})

export class FormServiceService {

  constructor(private http:HttpClient) { }

  getList(){
    return this.http.get('https://feedback-eb.herokuapp.com/feedback/list');
  }
  sendFeedback(payLoad){
    return this.http.post('https://feedback-eb.herokuapp.com/feedback/create',payLoad,httpOptions);
  }
}
