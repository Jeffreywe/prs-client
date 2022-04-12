import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestLine } from './requestline.class';

@Injectable({
  providedIn: 'root'
})
export class RequestLineService {

  baseUrl: string = "http://localhost:43788/api/requestlines";

  constructor(
  private http: HttpClient 
  ) { }

  get(id: number): Observable<RequestLine> {
    return this.http.get(`${this.baseUrl}/${id}`) as Observable<RequestLine>;
  }

  create(requestLine: RequestLine): Observable<RequestLine> {
    return this.http.post(`${this.baseUrl}`, requestLine) as Observable<RequestLine>;
  }

  change(requestLine: RequestLine): Observable<any> {
    return this.http.put(`${this.baseUrl}/${requestLine.id}`, requestLine) as Observable<any>;
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`) as Observable<RequestLine>;
  }
  
}
