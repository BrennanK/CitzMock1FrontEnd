import { Component, OnInit, Output, EventEmitter} from '@angular/core';

import {FoodItem} from '../items/fooditem';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { OrderserviceService } from '../orderservice.service';
@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {


  foodForm!:FormGroup;
  constructor(private formBuilder:FormBuilder, private service:OrderserviceService) {}
  
  sampleFood:FoodItem[]= [new FoodItem('Spaghetti','It is Spaghetti',9.35),new FoodItem('Taco','It is a Taco',10.11),new FoodItem('Chips','It is Chips',3.25),new FoodItem('Cookies','It is a pack of chocolate chip cookies',2.45),new FoodItem('Fish','Freshly fished out of the ocean and served to you on a plate.',5.55)];
  order:FoodItem[]=[];
  ngOnInit(): void {
  
    this.service.getMaxOrderID();
    this.foodForm=this.formBuilder.group
    (
      {
        item1:['',Validators.requiredTrue],
        item2:['',Validators.required],
        item3:['',Validators.required],
        item4:['',Validators.required],
        item5:['',Validators.required],
      }
    );

  }

  itemsSelected:number=0;

  incrementOrDecrement(event:any,foodName:FoodItem)
  {
    if(event.target.checked == true)
    {
      this.itemsSelected++;
      this.order.push(foodName);
    }
    else
    {
      this.itemsSelected--;
      let index=this.order.findIndex(food=>food.name==foodName.name);
      this.order.splice(index,1);
    }
  }

  


  orderPlacement()
  {
    this.service.setOrderInProgress(this.order);
    alert("Order Placed Successfully");
  }

}
