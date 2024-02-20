import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-eventdata',
  templateUrl: './eventdata.component.html',
  styleUrl: './eventdata.component.css'
  
})
export class EventdataComponent {
eventDate: Date = new Date;
eventTime: string = '';
eventLocation: string = '';
occasion: string = '';
numberOfGuests: number = 0;
specialRequests: string = '';

constructor(private http: HttpClient, private router: Router ){
  this.eventDate = new Date();
  this.eventTime= '';
  this.eventLocation = '';
  this.occasion = '';
  this.numberOfGuests = 0;
  this.specialRequests = '';

}


onSubmit() {

  const formattedEventDate = formatDate(this.eventDate, 'yyyy-MM-dd', 'en-US');

  const evnetData= {
    eventDate : formattedEventDate,
    eventTime: this.eventTime,
    eventLocation: this.eventLocation,
    occasion: this.occasion,
    numberOfGuests: this.numberOfGuests,
    specialRequests: this.specialRequests
  };

  this.http.post('http://localhost:7777/api/events/newEvent',evnetData) 
    .subscribe((response:any)=>{
      console.log('Event Data Submitted:',response);
      this.router.navigate(['/success']);
    },
    (error)=> {
      console.error('Error submitting event data  :', error);
    }
  );
  
}

cancel() {
  this.router.navigate(['/']);
  console.log('Event Cancelled....!');
}
}
