import { Component, OnInit } from '@angular/core';

import { Dog } from './dog';
import { DogService } from './dog.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  dogs: Dog[] = [];
  constructor(private dogService: DogService) { }
  ngOnInit() {
    this.dogService.getDogs()
      .then(dogs => this.dogs = dogs.slice(1,5));
  }
  gotoDetail(){ /* not implemented yet */}
}
