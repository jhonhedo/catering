import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrl: './customer-register.component.css'
})
export class CustomerRegisterComponent {
  id: number = 0;
  customerName: string = '';
  customerPassword: string = '';
  customerEmail: string = '';
  customerPhone: string = '';
  customerAddress: string = '';
  customerDietaryRestriction: string = '';
  customerNote: string = '';
  passwordError: string = '';

  onSubmit() {
    // Implement your submit logic here
  }

  cancel() {
    // Implement your cancel logic here
  }

  checkPassword() {
    // Implement your password validation logic here
  }
}
