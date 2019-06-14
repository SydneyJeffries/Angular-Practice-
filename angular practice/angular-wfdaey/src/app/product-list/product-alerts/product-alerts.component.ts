import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'; 
import { Output, EventEmitter } from '@angular/core' 


@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product; //indicates that product will be passed in from parent: the product list commponent in this case
  @Output() notify = new EventEmitter();  // in order for the parent to take controll of the
  // event listener that belongs to a button in the child commponet; the child has to pass off the 
  // event. create an instance of the eventemitter object and output it to the parent,
  // return to the location the child is being rendered: in the parent's template and
  // include the event emittter instance. 

  constructor() { }

  ngOnInit() {
  }

}