import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  remainingJobs: any;
  remainingTrips: any;
  showCard: boolean = true;

  constructor() { }

  ngOnInit() {
    this.remainingJobs = 6;
    this.remainingTrips = 3;

  }


  updateDone() {
    this.showCard = false;
  }

}
