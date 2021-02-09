import {Customer} from '../model/Customer'
export class Bill{
    billID: number;
    customerID: number;
    number: number; 
    date: Date;
    total: number;
    info: string; 
    customerName:string;
    // normal cand lucrez cu o baza de date se declara numai variabilele  exempolu :  billID: number = 0;
    // normal nu declaram constructoer
    // deoarece initial nu ai avut un db facut ai facut cu constructor ca sa iti poti testa codul
    
    
    
    constructor( billID: number,customerID: number, number: number, date: Date,total: number,info: string, customerName:string)
    {
     this.billID=billID;
     this.customerID=customerID;
     this.number=number;
     this.date=date;
     this.total=total;
     this.info=info;
     this.customerName=customerName;
    }
}
