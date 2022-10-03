import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product/product';
import { PRODUCTS } from '../model/product/list-products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product = PRODUCTS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
