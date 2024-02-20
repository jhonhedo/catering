import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrl: './customer-register.component.css'
})
export class CustomerRegisterComponent {
  id: number = 0;
  customerName: string = '';
  customerPassword: string = '';
  confirmPassword: string = '' ;
  customerEmail: string = '';
  customerPhone: string = '';
  customerAddress: string = '';
  customerDietaryRestriction: string = '';
  customerNote: string = '';
  passwordError: string = '';

constructor(private router: Router, private http: HttpClient){}

  onSubmit() {
    this.checkPassword();

    if(this.passwordError) {
      return;
    }

    // alert('Login successful ' + `customerEmail: ${this.customerEmail}`+ `customerPassword: ${this.customerPassword}` +
    // `customerName: ${this.customerName}` + `customerPhone: ${this.customerPhone}` + `customerAddress: ${this.customerAddress}` +
    // `customerDietaryRestriction: ${this.customerDietaryRestriction}` + `customerNote: ${this.customerNote}` + `id: ${this.id}` )
    let customerData ={
      "customerName":this.customerName,
      "customerPassword":this.customerPassword,
      "customerEmail":this.customerEmail,
      "id":this.id,
      "customerPhone":this.customerPhone,
      "customerAddress":this.customerAddress,
      "customerDietaryRestriction":this.customerDietaryRestriction,
      "customerNote":this.customerNote
    };

    this.http.post("http://localhost:7777/api/customers/register",customerData)
    .subscribe((response:any)=>{
      console.log(response)
      alert("User register success")
    })
  }

  cancel() {
    this.router.navigate(['/']);
  }

  checkPassword() {
    if(this.customerPassword !== this.confirmPassword)  {
      this.passwordError = 'Password does not match';
      return;
    }    else {
      this.passwordError = '' ;
    }
  }
}
