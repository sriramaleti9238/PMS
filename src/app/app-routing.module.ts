import { AddpatientinfoComponent } from './addpatientinfo/addpatientinfo.component';

import { AppointmentsComponent } from './appointments/appointments.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailComponent } from './mail/mail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexpageComponent } from './indexpage/indexpage.component';

const routes: Routes = [
  {
    path: 'appointments' ,component :AppointmentsComponent
  },
  {
    path : 'mail' ,component:MailComponent
  },
  {
    path : 'navbar', component:NavbarComponent
  },
  {
    path : '', component :IndexpageComponent
  },
  {
    path : 'addpatientinfo', component : AddpatientinfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [AppointmentsComponent,MailComponent,IndexpageComponent,NavbarComponent]