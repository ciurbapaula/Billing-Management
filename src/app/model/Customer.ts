export class Customer {
    customerID: number;
    name: string ;
    address: string; 
    info: Date; 
    constructor( customerID: number,name: string, address:string,info: Date)
    {
     this.customerID=customerID;
     this.name=name;
     this.address=address;
     this.info=info;
    }
}
