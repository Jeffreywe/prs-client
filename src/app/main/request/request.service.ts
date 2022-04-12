import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from './request.class';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseUrl: string = "http://localhost:43788/api/requests";
  reqUrl: string = "http://localhost:43788/api/requests/review";
  

  constructor(
    private http: HttpClient
  ) { }

  requests(userId: number): Observable<Request[]> {
    return this.http.get(`${this.reqUrl}/${userId}`) as Observable<Request[]>;
  }
  review(req: Request): Observable<any> {
    return this.http.put(`${this.baseUrl}/${req.id}/request`, req) as Observable<any>;
  }
  approve(req: Request): Observable<any> {
    return this.http.put(`${this.baseUrl}/${req.id}/setApproved`, req) as Observable<any>;
  }
  reject(req: Request): Observable<any> {
    return this.http.put(`${this.baseUrl}/${req.id}/setRejected`, req) as Observable<any>;
  }



  list(): Observable<Request[]> {
    return this.http.get(`${this.baseUrl}`) as Observable<Request[]>;
  }

  get(id: number): Observable<Request> {
    return this.http.get(`${this.baseUrl}/${id}`) as Observable<Request>;
  }

  create(request: Request): Observable<Request> {
    return this.http.post(`${this.baseUrl}`, request) as Observable<Request>;
  }

  change(request: Request): Observable<any> {
    return this.http.put(`${this.baseUrl}/${request.id}`, request) as Observable<any>;
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`) as Observable<any>;
  }
}
