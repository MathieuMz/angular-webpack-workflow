import uirouter from 'angular-ui-router';
import ProductsService from './products.service';
import ProductsController from './products.controller';

export default angular.module('app.products', [uirouter])
	.service('ProductsService', ProductsService)
	.controller('ProductsController', ProductsController)
	.config(function($stateProvider) {
	  $stateProvider.state('products', {
      url: '/products',
      views: {
        '@': {
          controller: ProductsController,
          controllerAs: 'products',
          templateUrl: 'views/products.html'
        }
      }
    });
	})
	.name;
