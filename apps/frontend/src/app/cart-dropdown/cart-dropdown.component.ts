import { Component, OnInit } from '@angular/core';
import { CartService } from '@multishop/shared-utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-dropdown',
  templateUrl: './cart-dropdown.component.html',
  styleUrls: ['./cart-dropdown.component.css']
})
export class CartDropdownComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartService.cartState.subscribe((state) => {
      this.cartItems = state.items;
      this.totalPrice = state.totalPrice;
    });
  }

  viewCart() {
    this.router.navigate(['/cart']);
  }

  checkout() {
    this.router.navigate(['/checkout']);
  }
}
