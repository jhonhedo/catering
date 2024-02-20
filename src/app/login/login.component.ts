import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Use styleUrls instead of styleUrl
})
export class LoginComponent {
  customerEmail: string;
  customerPassword: string;
  data!:any;
  successMsg:string;

  constructor(private http: HttpClient, private router: Router) {
    this.customerEmail = '';
    this.customerPassword = '';
    this.successMsg = '';
  }

  login() {
    const customerEmail = this.customerEmail;
    const customerPassword = this.customerPassword;

    // let url = `http://localhost:7777/api/customers/login?customerEmail=${this.customerEmail}&customerPassword=${this.customerPassword}`;
  //   this.http.get<any>(url).subscribe(data=>{
  //     if(data === null) {
  //       this.successMsg = 'login failed..! Incorrect Email or Password';
  //       console.log(this.successMsg);
  //     } else {
  //       this.data = data;
  //       if(customerEmail === data.customerEmail && customerPassword === data.customerPassword) {
  //         this.successMsg ='Login success..!';
  //         console.log(this.successMsg);
  //         sessionStorage.setItem('userData', JSON.stringify(this.data));
  //         this.router.navigate(['/']);
  //       }
  //     }
  //   });
   }

  // register() {
  //   this.router.navigate(['/register']); // Corrected navigation path and added quotes around 'register'
  // }

}
