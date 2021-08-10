import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrderPageComponent} from './order-page/order-page.component';
import { AppComponent } from './app.component';
const routes: Routes = 
[
  {path:'orderpage', component: OrderPageComponent},
  {path:'home',component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
