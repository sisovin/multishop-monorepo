import { Component, OnInit } from '@angular/core';
import { BannerService } from '@multishop/shared-utils';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  banners: any[] = [];
  currentBannerIndex: number = 0;

  constructor(private bannerService: BannerService) {}

  ngOnInit() {
    this.fetchBanners();
    this.startBannerRotation();
  }

  fetchBanners() {
    this.bannerService.getBanners().subscribe((data: any) => {
      this.banners = data;
    });
  }

  startBannerRotation() {
    setInterval(() => {
      this.currentBannerIndex = (this.currentBannerIndex + 1) % this.banners.length;
    }, 5000);
  }
}
