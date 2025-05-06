import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Multishop';
  products: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http.get(`${environment.apiBaseUrl}/products`)
      .subscribe((data: any) => {
        this.products = data;
      });
  }
}
