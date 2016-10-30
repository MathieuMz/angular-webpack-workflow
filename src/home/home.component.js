import uirouter from 'angular-ui-router';

class HomeController {
	constructor() {
		this.welcomeMessage = 'Hello World';
	}
}

export default angular.module('app.home', [uirouter])
	.controller('HomeController', HomeController)
	.config(function($stateProvider) {
	  $stateProvider.state('home', {
      url: '/home',
      views: {
        '@': {
          controller: HomeController,
          controllerAs: 'home',
          templateUrl: 'views/home.html'
        }
      }
    });
	})
	.name;
