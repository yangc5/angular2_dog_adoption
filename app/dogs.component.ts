import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {Dog} from './dog';
import {DogDetailComponent} from './dog-detail.component';
import {DogService} from './dog.service';
import {OnInit} from '@angular/core';

@Component({
    selector: 'my-dogs',
    templateUrl:'app/dogs.component.html',
    styleUrls:['app/dogs.component.css'],
    directives: [DogDetailComponent]
})
export class DogsComponent implements OnInit{
  dogs: Dog[];
  selectedDog: Dog;

  constructor(
    private router: Router,
    private dogService: DogService) {}

  ngOnInit() {
    this.getDogs();
  }

  getDogs() {
    this.dogService.getDogs().then(dogs => this.dogs = dogs);
  }

  onSelect(dog: Dog) {
    this.selectedDog = dog;
  }

  gotoDetail() {
    this.router.navigate(['DogDetail', {id: this.selectedDog.id}]);
  }
}
