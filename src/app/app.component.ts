import {
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
  QueryList,
  ElementRef,
} from '@angular/core';
import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild(ChildComponent, { static: false }) childView!: ChildComponent;
  @ViewChildren(ChildComponent) childrenView!: QueryList<any>;
  @ViewChild('fruit', { static: false }) fruit!: ElementRef;

  /*   constructor() {
    console.log(this.childView);
  } */

  ngAfterViewInit(): void {
    console.log(this.childrenView);
    const children: ChildComponent[] = this.childrenView.toArray();
    console.log(children);
    console.log(this.fruit);
    console.table(this.childView);
  }

  addFruit(): void {
    this.childView.fruitCounter();
    this.fruit.nativeElement.innerText = this.childView.fruitStatus;
    console.log(this.childView.fruitStatus);
  }

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
