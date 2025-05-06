import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '@multishop/shared-utils';
import { Product } from '@multishop/shared-types';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id');
      if (productId) {
        this.fetchProduct(productId);
      }
    });
  }

  fetchProduct(productId: string) {
    this.productService.getProductById(productId).subscribe(
      (product: Product) => {
        this.product = product;
      },
      error => {
        console.error('Error fetching product:', error);
      }
    );
  }
}
