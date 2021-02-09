import { Component, OnInit } from '@angular/core';
import { Bill } from '../model/bill';
import { Customer } from '../model/Customer';
import { Router, ActivatedRoute } from '@angular/router';
import { BillService } from '../bill.service';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
  public billList: Array<Bill>;
  public customerList: Array<Customer>;
  public bill: Bill;
  public deleteBill: boolean = false;
  public confirmDelete: boolean = false;
  public generateNumber: boolean = false;

  public selectedValue = null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private billService: BillService,
    private customerService: CustomerService

  ) { }

  ngOnInit(): void {
    this.getListOfBills();
  }
  getListOfBills(): void {
    this.billList = new Array<Bill>();

    this.customerList = new Array<Customer>();
    this.customerService.getAll().subscribe(result => {
// În Angular subscribe () este o metodă pe tipul Observabil. Tipul Observabil este o utilitate care
// transmite date asincron sau sincron la o varietate de componente sau servicii care s-au abonat la observabil.
//Observabilele oferă suport pentru transmiterea mesajelor între părțile din aplicaț   
//Modelul de observare este un model de proiectare software în care un obiect, numit subiect, menține o listă a dependenților săi,
// numiți observatori și îi notifică automat de modificările de stare.
this.customerList = result;
      console.log(result);
    })
    this.billService.getAll().subscribe(result => {
      this.billList = result;
      //pt nume customer
      // for (var index=0; index < this.billList.length; index++) {
      //   this.customerService.getById(this.billList[index].customerID).subscribe(resultCustomer => {
      //     this.billList[index].customerName = resultCustomer.name;
      //   })
      //}
      console.log(result);
    })
  }


  createNewBill() {
    this.bill = new Bill(0, null, 0, null, 0, null, null);
  }
  edit(id: number): void {

    this.billService.getById(id).subscribe(result => {
      this.bill = result;
      console.log(result);
    })

  }
  details(e: any): void {
    console.log("details")

  }
  delete(id: number): void {
    // this.deleteBill=true;
    this.billService.delete(id).subscribe(result => {
      this.getListOfBills();

    })

  }
  generate(e: any): void {
    this.bill.number = Math.floor((Math.random() * 999999) + 1);
  }
  create(): void {
    this.bill.date = null;
    // this.customerService.getById(this.bill.customerID).subscribe(resultCustomer => {
    //   this.bill.customerName = resultCustomer.name;
    // })
    this.billService.create(this.bill).subscribe(result => {
      this.bill = null;
      this.getListOfBills();
    })
  }
//   create() dupa ce s-a creat un nou bill tu vrei ca billul cu care lucrezi sa fie setat pe null......
// this.bill = null (il setam pe null numai pt conditia de ngIF
// cand bill == null sunt in overview, cand bill != null sunt in create sau update
// apelam din nou functia de getListOfBlls pentru a avea tabelul cu noile valori

  save(): void {//deoarece textboxul nu accepta forma de date, dadea eroare si ca sa pot sa salvez momentan l-ai setat pe null ca sa nu ai probleme

    this.bill.date = null;
    this.billService.update(this.bill).subscribe(result => {
      console.log("am salvat");

      this.bill = null;
      this.getListOfBills();// apelam din nou functia de getListOfBlls pentru a avea tabelul cu noile valori
    })
  }
  cancel(e: any): void {
    this.bill = null;
    this.deleteBill = false;
    this.confirmDelete = false;
  }
}
