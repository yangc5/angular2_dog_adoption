import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Dog } from './dog';
import { DogService } from './dog.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  dogs: Dog[] = [];
  constructor(
    private router: Router,
    private dogService: DogService) { }
  ngOnInit() {
    this.dogService.getDogs()
      .then(dogs => this.dogs = dogs.slice(1,5));
  }
  gotoDetail(dog: Dog){
    let link = ['DogDetail', {id: dog.id}];
    this.router.navigate(link);
  }
}
