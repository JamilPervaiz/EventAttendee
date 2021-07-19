import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PosComponent} from './pos/pos.component';
import {CheckoutComponent} from './checkout/checkout.component';


const routes: Routes = [
  {
    path: '',
    component: PosComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
