import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { FoodItem } from './items/fooditem';
@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  orderInProgress:FoodItem[]=[];
  tempOrderId:number=1;
  constructor(private http:HttpClient) { }

  getMaxOrderID()
  {
    let num:number;
    this.http.get<number>("http://localhost:8022/Restaurant/order").subscribe(n=>{num=n; if (num!= undefined){this.tempOrderId=num+1;}console.log("This is num: " +num);});
  }

  postOrder()
  {

    for(let i=0;i<this.orderInProgress.length;i++)
    {
      this.orderInProgress[i].orderid=this.tempOrderId;
    }

    const options= new HttpHeaders({'Content-Type': 'application/json'});
    this.http.post<FoodItem[]>("http://localhost:8022/Restaurant/order",this.orderInProgress,{headers:options}).subscribe(n=>this.orderInProgress=n);

  }

  setOrderInProgress(foods:FoodItem[])
  {
    this.orderInProgress=foods;
    this.postOrder();
  }

  getOrderInProgress(): Observable<FoodItem[]>
  {
   return this.http.get<FoodItem[]>("http://localhost:8022/Restaurant/order/"+this.tempOrderId);
  }


}
