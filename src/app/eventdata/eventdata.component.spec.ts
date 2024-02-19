import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventdataComponent } from './eventdata.component';

describe('EventdataComponent', () => {
  let component: EventdataComponent;
  let fixture: ComponentFixture<EventdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventdataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
