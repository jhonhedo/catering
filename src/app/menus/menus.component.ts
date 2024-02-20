import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrl: './menus.component.css'
})
export class MenusComponent {

  menuId: number;
  name: string;
  description: string;
  dietaryRestrictions: string;
  price: number;

  constructor(private router:Router,private http: HttpClient) {
    this.menuId = 0;
    this.name = '';
    this.description = '';
    this.dietaryRestrictions = '';
    this.price = 0;
  }

  onSubmit() {

    const menuData={
      menuID:this.menuId,
      name : this.name,
      description : this.description,
      dietaryResstrictions : this.dietaryRestrictions,
      price :this.price
    }
    this.http.post('http://localhost:7777/api/menus/newMenu',menuData)
    .subscribe((respone:any)=>{
      console.log(respone);
      alert('Menu add Successfully..');

    })
  }

  cancel(){
    this.router.navigate(['/']);
    console.log('Form cancelled!');
  }

}
