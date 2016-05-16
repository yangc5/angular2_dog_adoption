import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import {DogService} from './dog.service';
import {Dog} from './dog';

@Component({
  selector: 'my-dog-detail',
  templateUrl: 'app/dog-detail.component.html',
  styleUrls: ['app/dog-detail.component.css'],
})
export class DogDetailComponent implements OnInit {
  dog: Dog;
  constructor(
    private dogService: DogService,
    private routeParams: RouteParams) {
  }
  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.dogService.getDog(id)
      .then(dog => this.dog = dog);
  }
  goBack(){
    window.history.back();
  }
}
