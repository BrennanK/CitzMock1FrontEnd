import { Component,OnChanges } from '@angular/core';
import { FoodItem } from './items/fooditem';
import { OrderserviceService } from './orderservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mock-restaurant';
  orderPlaced:boolean=false;
  showOrderPlaced:boolean=false;
  customerOrder:FoodItem[]=[];
  totalPrice:number=0;
  constructor(public service:OrderserviceService){}

  ngOnChanges(): void 
  {
    console.log("Init is being called");
    console.log("The length is: "+ this.service.orderInProgress.length)
    if(this.service.orderInProgress.length>0)
    {
      this.setOrderPlaced(true);
    }
    else
    {
      this.setOrderPlaced(false);
    }
  }

  setOrderPlaced(value:boolean)
  {
    this.orderPlaced=value;
  }

  setCustomerOrder(order:FoodItem[])
  {
    this.customerOrder=order;
    console.log('This is the customer order '+this.customerOrder);
    this.setOrderPlaced(true);
  }

  orderThanks()
  {
    console.log("thankks")
    alert("Thanks.Please visit us again.");
  }

  showOrder()
  {
    this.service.getOrderInProgress().subscribe(n=>{this.customerOrder=n; for(var g of this.customerOrder){this.totalPrice+=g.price;}});
    /*
    for( var g of this.customerOrder)
    {
      this.totalPrice+= g.price;
    }
    */
    this.showOrderPlaced=true;
  }
}
