import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { PrevioushistoryComponent } from '../previoushistory/previoushistory.component';

interface Blood {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-addpatientinfo',
  templateUrl: './addpatientinfo.component.html',
  styleUrls: ['./addpatientinfo.component.css']
})
export class AddpatientinfoComponent {
 
  constructor(public dialog: MatDialog) {}


  openDialog() {
    const dialogRef = this.dialog.open(PrevioushistoryComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  bloods: Blood[] = [
    {value: 'steak-0', viewValue: 'O+'},
    {value: 'pizza-1', viewValue: 'O-'},
    {value: 'tacos-2', viewValue: 'A+'},
    {value: 'tacos-3', viewValue: 'A-'},
    {value: 'tacos-4', viewValue: 'B+'},
    {value: 'tacos-5', viewValue: 'A-'},
    {value: 'tacos-6', viewValue: 'AB+'},
    {value: 'tacos-7', viewValue: 'AB-'},
  ];

  valueee = 'Clear me';
}



