import { Component, OnInit } from '@angular/core';
import { CartService } from '@multishop/shared-utils';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.fetchCartItems();
  }

  fetchCartItems() {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
      this.calculateTotalPrice();
    });
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  updateQuantity(item: any, quantity: number) {
    this.cartService.updateCartItem(item.id, quantity).subscribe(() => {
      item.quantity = quantity;
      this.calculateTotalPrice();
    });
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item.id).subscribe(() => {
      this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
      this.calculateTotalPrice();
    });
  }
}
