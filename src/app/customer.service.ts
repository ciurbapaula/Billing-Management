import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { environment }  from '../environments/environment';
import { Observable } from 'rxjs';
import { Customer } from './model/Customer';

@Injectable()
export class CustomerService {
    private url = `${environment.webApiUrl}/customer`;

    constructor(private httpClient: HttpClient) { }

    public getAll(): Observable<Customer[]> {
        return this.httpClient.get<Customer[]>(this.url);
    }

    public getById(id: number): Observable<Customer> {
        return this.httpClient.get<Customer>(`${this.url}/${id}`);
    }

    public create(Customer: Customer): Observable<Customer> {
        return this.httpClient.post<Customer>(this.url, Customer);
    }

    public update(Customer: Customer): Observable<Customer> {
        console.log(Customer);
        return this.httpClient.put<Customer>(`${this.url}/${Customer.customerID}`, Customer);
    }


    public delete(id: number): Observable<Customer> {
        return this.httpClient.delete<Customer>(`${this.url}/${id}`);
    }
}