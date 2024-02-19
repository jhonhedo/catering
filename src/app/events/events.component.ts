import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
eventDate: Date = new Date;
eventTime: string = '';
eventLocation: string = '';
occasion: string = '';
numberOfGuests: number = 0;
specialRequests: string = '';


onSubmit() {
  // Add logic for form submission
}

cancel() {
  // Add logic for cancel button
}


}
