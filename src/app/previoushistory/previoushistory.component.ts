import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-previoushistory',
  templateUrl: './previoushistory.component.html',
  styleUrls: ['./previoushistory.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class PrevioushistoryComponent {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['TestConducted', 'ExpectedResult', 'ActualResult', 'Status'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!:   null;
}

export interface PeriodicElement {
  TestConducted: string;
  ExpectedResult: string;
  ActualResult: string;
  Status: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  

  {
    TestConducted: '12/03/2021',
    ExpectedResult: 'Negative',
    ActualResult: 'positive',
    Status: 'Booked',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    TestConducted: '12/03/2021',
    ExpectedResult: 'Negative',
    ActualResult: 'positive',
    Status: 'Booked',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    TestConducted: '12/03/2021',
    ExpectedResult: 'Negative',
    ActualResult: 'positive',
    Status: 'Booked',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    TestConducted: '12/03/2021',
    ExpectedResult: 'Negative',
    ActualResult: 'positive',
    Status: 'Booked',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    TestConducted: '12/03/2021',
    ExpectedResult: 'Negative',
    ActualResult: 'positive',
    Status: 'Booked',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    TestConducted: '12/03/2021',
    ExpectedResult: 'Negative',
    ActualResult: 'positive',
    Status: 'Booked',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    TestConducted: '12/03/2021',
    ExpectedResult: 'Negative',
    ActualResult: 'positive',
    Status: 'Booked',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    TestConducted: '12/03/2021',
    ExpectedResult: 'Negative',
    ActualResult: 'positive',
    Status: 'Booked',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    TestConducted: '12/03/2021',
    ExpectedResult: 'Negative',
    ActualResult: 'positive',
    Status: 'Booked',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    TestConducted: '12/03/2021',
    ExpectedResult: 'Negative',
    ActualResult: 'positive',
    Status: 'Booked',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    TestConducted: '12/03/2021',
    ExpectedResult: 'Negative',
    ActualResult: 'positive',
    Status: 'Booked',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },



  

  

];
