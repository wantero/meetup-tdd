import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetupComponent } from './meetup.component';

describe('MeetupComponent', () => {
  let component: MeetupComponent;
  let fixture: ComponentFixture<MeetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment variable', () => {
    component.increment(2)
    expect(component.myCount).toBe(2)
  })

  it('should decrement variable', () => {
    component.decrement(2)
    expect(component.myCount).toBe(-2)
  })

});
