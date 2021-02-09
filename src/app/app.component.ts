import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({ // face lagatura intre fisierul htm css
  selector: 'app-root',// the selector property of the component is just a string(must be unique) 
 // that is used to identify the component or an element in the DOM.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {// contructor  se declara serviciile care vor fi folosite 
  title = 'Billing-Management';
  public isMainPage: boolean=true; 
  public showWelcome: boolean=true;
  constructor(
    private router: Router,// navigae la celelalte tabs 
    private activatedRoute: ActivatedRoute// ActivatedRoute Contains the information about a route
    // associated with a component loaded in an outlet. It can also 
    //be used to pass data from one component to another component using route 
    //such as Id, flag, state etc.
    ) { }

  ngOnInit(): void {// aici se pune ttot ce vrei sa se apeleze/intample cand se deschide pagina 
    
  }
  navigateToBillsOverview():void{//ma duce pe pagina urmatoare metoda alternativa
    this.router.navigate(['/billsOverview']);
  }
  navigateToCustomersOverview(): void{ // navigheaza la pagina urmatoare metoda alternativa 
    this.router.navigate(['/customersOverview']);
  }
  goToBills():void{// event pt buton pt a merge pe pagina urmatoare am apelat metoda de navigare 
   // this.navigateToBillsOverview();
    
    this.showWelcome=false;
  }
  goToCustomers():void{// event pt buton pt a merge pe pagina urmatoare am apelat metoda de navigare 
    // this.navigateToBillsOverview();
     
     this.showWelcome=false;
   }
  // openNewTab() {// creeaza un url pt noul tab
  //   const url = this.router.serializeUrl(
  //     this.router.createUrlTree(['/billsOverview'])
  //   );
  
  //   window.open(url, '_blank');// deschide  tabul
  // }
}
