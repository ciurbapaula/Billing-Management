import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from '../model/Customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  public customer: Customer;
  public customerList: Array<Customer>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.getListOfCustomers();
    this.customer = null;
  }
  getListOfCustomers(): void {
    this.customerList = new Array<Customer>();
    this.customerService.getAll().subscribe(result => {
      this.customerList = result;
      console.log(result);
    })
  }
  createNewCustomer() {
    this.customer = new Customer(0, null, null, null);
    console.log(this.customer)
  }
  edit(id: number): void {
    console.log(this.customer);
    this.customerService.getById(id).subscribe(result => {
      this.customer = result;
      console.log(result);
    })

  }
  create(): void {
    console.log(this.customer);
    this.customerService.create(this.customer).subscribe(result => {
      console.log("am creat");
      this.customer = null;
      this.getListOfCustomers();
    })
  }
  save(): void {
    this.customerService.update(this.customer).subscribe(result => {
      console.log("am salvat");

      this.customer = null;
      this.getListOfCustomers();
    })
  }
  cancel(e: any): void {
    this.customer = null;
  }
  delete(id: number): void {
    console.log(id);
    this.customerService.delete(id).subscribe(result => {
      console.log("am sters cu succes");
      this.getListOfCustomers();
    })
  }
  details(){
    
  }
}
