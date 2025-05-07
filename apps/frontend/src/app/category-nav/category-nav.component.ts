import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '@multishop/shared-utils';

@Component({
  selector: 'app-category-nav',
  templateUrl: './category-nav.component.html',
  styleUrls: ['./category-nav.component.css']
})
export class CategoryNavComponent implements OnInit {
  categories: any[] = [];
  @Output() categorySelected = new EventEmitter<string>();

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories() {
    this.categoryService.getCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }

  filterProductsByCategory(categoryId: string) {
    this.categorySelected.emit(categoryId);
    // Implement logic to filter products by category
  }
}
