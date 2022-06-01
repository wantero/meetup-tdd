import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetupComponent } from './meetup/meetup.component';

const routes: Routes = [
  { path: 'meetup', component: MeetupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
