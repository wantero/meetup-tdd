import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meetup',
  templateUrl: './meetup.component.html',
  styleUrls: ['./meetup.component.scss']
})
export class MeetupComponent implements OnInit {

  myCount: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  increment(value: number) {
    this.updateMyVar(value)
   }

  decrement(value: number) {
    this.updateMyVar(-value)
   }

   private updateMyVar(value: number) {
     this.myCount += value
   }

}
