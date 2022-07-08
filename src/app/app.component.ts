import { ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  loggedIn!: boolean;

  logIn(evt: boolean): void {
    console.log(evt);
    this.loggedIn = evt;
  }

  user = {
    id: 1,
    name: 'Kevin',
    gender: 'M',
    ageGroup: '51+',
    userCode: 'M51+',
    reqs: {},
    reqsStatus: {
      fruitMet: false,
      vegMet: false,
      proteinMet: false,
      grainMet: false,
    },
    registered: false,
    email: 'kevin@kevinruse.com',
  };
}
