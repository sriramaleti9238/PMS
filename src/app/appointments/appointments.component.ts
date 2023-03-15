import { Component,OnInit, ViewEncapsulation } from '@angular/core';


interface patient{
  pano:number,
  patientname:string,
  gender:string
}

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css'],
  encapsulation: ViewEncapsulation.None,

})

export class AppointmentsComponent  implements OnInit{

  public pa:patient[]=[{
    pano:12,
    patientname:"shaik",
    gender:"male"
  }];
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor()
  {

  }

}

