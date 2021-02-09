import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillsComponent} from './bills/bills.component';
import { CustomersComponent} from './customers/customers.component';

export const routes: Routes = [ // se declara rutele 
  { path: 'billsOverview', component: BillsComponent, data:{pageTitle:'BillsOverview'} },

  { path: 'customersOverview', component: CustomersComponent,data:{pageTitle:'CustomersOverview'} }
];

@NgModule({ // An NgModule is a class marked by the @NgModule decorator. @NgModule takes a metadata 
  //object that describes how to compile a component's template and how to create an injector at runtime.

  
  imports: [RouterModule.forRoot(routes)],//The forRoot() method creates an NgModule that
  // contains all the directives, the given routes, and the Router service itself.
  exports: [RouterModule]
})
//export const appRouting = RouterModule.forChild(routes);The forChild() method creates an NgModule that contains 
//all the directives and the given routes, but does not include the Router service.
export class AppRoutingModule { };