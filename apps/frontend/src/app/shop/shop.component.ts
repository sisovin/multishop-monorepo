import { Component, OnInit } from '@angular/core';
import { ProductService } from '@multishop/shared-utils';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  categories: any[] = [];
  selectedCategory: string = '';
  selectedPriceRange: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
      this.filteredProducts = data;
    });
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(product => {
      return (this.selectedCategory ? product.category === this.selectedCategory : true) &&
             (this.selectedPriceRange ? this.isWithinPriceRange(product.price) : true);
    });
  }

  isWithinPriceRange(price: number): boolean {
    switch (this.selectedPriceRange) {
      case '0-50':
        return price >= 0 && price <= 50;
      case '51-100':
        return price > 51 && price <= 100;
      case '101-200':
        return price > 101 && price <= 200;
      case '200+':
        return price > 200;
      default:
        return true;
    }
  }

  onCategoryChange(category: string) {
    this.selectedCategory = category;
    this.filterProducts();
  }

  onPriceRangeChange(priceRange: string) {
    this.selectedPriceRange = priceRange;
    this.filterProducts();
  }
}
