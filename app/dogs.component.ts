import {Component} from '@angular/core';
import {Dog} from './dog';
import {DogDetailComponent} from './dog-detail.component';
import {DogService} from './dog.service';
import {OnInit} from '@angular/core';

@Component({
    selector: 'my-dogs',
    template:`
      <h2>Dogs</h2>
      <ul class="dogs">
        <li *ngFor="#dog of dogs" [class.selected]="dog === selectedDog" (click)="onSelect(dog)">
          <span class="badge">{{dog.id}}</span> {{dog.name}}
        </li>
      </ul>
      <my-dog-detail [dog]="selectedDog"></my-dog-detail>
      `,
      styles:[`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .dogs {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }
      .dogs li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
      }
      .dogs li.selected:hover {
        background-color: #BBD8DC !important;
        color: white;
      }
      .dogs li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
      }
      .dogs .text {
        position: relative;
        top: -3px;
      }
      .dogs .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }
    `],
    directives: [DogDetailComponent]
})
export class DogsComponent implements OnInit{
  dogs: Dog[];
  selectedDog: Dog;

  constructor(private dogService: DogService) {}

  ngOnInit() {
    this.getDogs();
  }

  getDogs() {
    this.dogService.getDogs().then(dogs => this.dogs = dogs);
  }

  onSelect(dog: Dog) {
    this.selectedDog = dog;
  }
}