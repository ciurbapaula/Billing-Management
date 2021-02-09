import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Bill } from './model/Bill';


@Injectable() 
//The @Injectable() decorator marks it as a service that can be injected,
// but Angular can't actually inject it anywhere until you configure an Angular dependency
// injector with a provider of that service.
// The injector is responsible for creating service instances and injecting them into classes
export class BillService {
    private url = `${environment.webApiUrl}/bill`;// se conecteaza la server  /bill /customer se conecteaza la serverul conectat la db

    constructor(private httpClient: HttpClient) { }//inject the HttpClient service as a dependency
    // of an application class vis component constructor 
    //You need to use HttpClient to communicate with your back-end HTTP server or a third-party server

    public getAll(): Observable<Bill[]> {
        return this.httpClient.get<Bill[]>(this.url);
    }

    public getById(id: number): Observable<Bill> {
        return this.httpClient.get<Bill>(`${this.url}/${id}`);
    }

    public create(Bill: Bill): Observable<Bill> {
        return this.httpClient.post<Bill>(this.url, Bill);
    }

    public update(Bill: Bill): Observable<Bill> {
        return this.httpClient.put<Bill>(`${this.url}/${Bill.billID}`, Bill);
    }


    public delete(id: number): Observable<Bill> {
        return this.httpClient.delete<Bill>(`${this.url}/${id}`);
    }
}