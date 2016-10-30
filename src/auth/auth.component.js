import uirouter from 'angular-ui-router';
import AuthController from './auth.controller';

export default angular.module('app.auth', [uirouter])
	.controller('AuthController', AuthController)
	.config(function($stateProvider) {
		$stateProvider.state('app.login', {
      url: '/login',
      views: {
        '@': {
          controller: AuthController,
          controllerAs: 'auth',
          templateUrl: 'views/auth.html'
        }
      }
    });
	  // $stateProvider
		// .state('app.login', {
	  //   url: '/login',
		// 	controller: AuthController,
		// 	controllerAs: '$ctrl',
	  //   templateUrl: 'views/auth.html',
	  // })
		//
	  // .state('app.register', {
	  //   url: '/register',
		// 	controller: AuthController,
		// 	controllerAs: '$ctrl',
	  //   templateUrl: 'views/auth.html',
	  // });
	})
	.name;
