import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';


const routes: Routes = [
  {
    path:'payment',
    component:PaymentPageComponent
  },
  { path: '', redirectTo: '/payment', pathMatch: 'full' },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
