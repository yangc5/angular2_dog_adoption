import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import {DogService} from './dog.service';
import {Dog} from './dog';

@Component({
  selector: 'my-dog-detail',
  template: `
    <div *ngIf="dog">
      <h2>{{dog.name}} details!</h2>
      <div><label>id: </label>{{dog.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="dog.name" placeholder="name">
      </div>
    </div>
  `

})
export class DogDetailComponent implements OnInit {
  constructor(
    private dogService: DogService,
    private routeParams: RouteParams) {
  }
}
