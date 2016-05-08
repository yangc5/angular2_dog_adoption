import { Component }       from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { DogService }     from './dog.service';
import { DogsComponent } from './dogs.component';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a [routerLink]="['Dogs']">Dogs</a>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    DogService
  ]
})
@RouteConfig([
  {
    path: '/dogs',
    name: 'Dogs',
    component: DogsComponent
  }
])
export class AppComponent {
  title = 'Angular2 Dog Adoption';
}
