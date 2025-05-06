import { Component, OnInit } from '@angular/core';
import { ProductService, BannerService, CategoryService } from '@multishop/shared-utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredProducts: any[] = [];
  banners: any[] = [];
  categories: any[] = [];

  constructor(
    private productService: ProductService,
    private bannerService: BannerService,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.fetchFeaturedProducts();
    this.fetchBanners();
    this.fetchCategories();
  }

  fetchFeaturedProducts() {
    this.productService.getFeaturedProducts().subscribe((data: any) => {
      this.featuredProducts = data;
    });
  }

  fetchBanners() {
    this.bannerService.getBanners().subscribe((data: any) => {
      this.banners = data;
    });
  }

  fetchCategories() {
    this.categoryService.getCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }
}
