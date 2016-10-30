import angular from 'angular';
import uirouter from 'angular-ui-router';
import home from './home/home.component';
import products from './products/products.component';
import auth from './auth/auth.component';

import 'bootstrap/dist/css/bootstrap.css';

let App = angular.module('app', [uirouter, home, auth, products]);
App.config(function($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/home');
});
App.run(function() {
  let jsonData = ['ownerships', 'products', 'users', 'testRequests'];
  jsonData.forEach(function(item) {
    let data = require('./json/' + item + '.json');
    localStorage.setItem(item, JSON.stringify(data));
  });
})
export default App.name;
