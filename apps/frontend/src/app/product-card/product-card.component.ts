import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '@multishop/shared-types';
import { ProductService } from '@multishop/shared-utils';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: Product;

  constructor(private productService: ProductService, private router: Router) {}

  navigateToProductDetail() {
    this.router.navigate(['/product-detail', this.product.id]);
  }

  addToCart() {
    // Logic to add the product to the cart
  }
}
