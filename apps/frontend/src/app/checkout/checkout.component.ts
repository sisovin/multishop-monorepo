import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '@multishop/shared-utils';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  currentStep: number = 1;

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private router: Router
  ) {
    this.checkoutForm = this.fb.group({
      shippingAddress: this.fb.group({
        fullName: ['', Validators.required],
        address: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', Validators.required]
      }),
      paymentDetails: this.fb.group({
        cardName: ['', Validators.required],
        cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
        expirationDate: ['', Validators.required],
        cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]]
      })
    });
  }

  ngOnInit(): void {}

  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  submitOrder() {
    if (this.checkoutForm.valid) {
      // Handle order submission logic here
      this.cartService.clearCart();
      this.router.navigate(['/order-confirmation']);
    }
  }
}
