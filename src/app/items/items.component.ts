import { Component, OnInit,Input } from '@angular/core';
import {FoodItem} from './fooditem';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  isSelected:boolean=false;
  constructor() { }

  @Input()
  item:FoodItem=new FoodItem('Spaghetti','A bowl of noodles topped with tomato sauce with 2 meatballs included.',9.00);
  
  @Input()
  controlName!:string;

  ngOnInit(): void {
  }
  
}
