import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../cart.service';
import { products } from '../../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products;

    addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

 ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.products = products[+params.get('productId')];
  });
}

}