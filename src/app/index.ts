import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import '../style/app.scss';

import {Api} from './services/api/index';
import {Home} from './components/home/index';
import {About} from "./components/about/index";

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app', // <app></app>
  providers: [...FORM_PROVIDERS, Api],
  directives: [...ROUTER_DIRECTIVES],
  pipes: [],
  styles: [require('./style.scss')],
  template: require('./index.html')
})
@RouteConfig([
  {path: '/', component: Home, name: 'Home'},
  {path: '/About', component: About, name: 'About'}
])
export class App {
  url: string = 'https://github.com/ocombe/ng2-webpack';

  constructor(public api: Api) {
  }
}
