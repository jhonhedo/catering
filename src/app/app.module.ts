import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { EventsComponent } from './events/events.component';




@NgModule({
  declarations: [
    AppComponent,
    CustomerRegisterComponent,
    LoginComponent,
    EventsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
