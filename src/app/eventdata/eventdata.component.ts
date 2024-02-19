import { Component } from '@angular/core';

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


onSubmit() {
  // Add logic for form submission
}

cancel() {
  // Add logic for cancel button
}


}
