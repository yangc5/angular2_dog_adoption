import { Component }       from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { DogService }     from './dog.service';
import { DogsComponent } from './dogs.component';
import { DashboardComponent } from './dashboard.component';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a [routerLink]="['Dashboard']">Dashboard</a>
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
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  }
])
export class AppComponent {
  title = 'Angular2 Dog Adoption';
}
