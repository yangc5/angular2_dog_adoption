import { Component }       from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { DogService }     from './dog.service';
import { DogsComponent } from './dogs.component';
import { DashboardComponent } from './dashboard.component';
import { DogDetailComponent } from './dog-detail.component';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav><a [routerLink]="['Dashboard']">Dashboard</a></nav>
    <nav><a [routerLink]="['Dogs']">Dogs</a></nav>
    <router-outlet></router-outlet>
  `,
  styleUrls:['app/app.component.css'],
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
  },
  {
    path: '/detail/:id',
    name: 'DogDetail',
    component: DogDetailComponent
  },
])
export class AppComponent {
  title = 'Angular2 Dog Adoption';
}
