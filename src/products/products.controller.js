export default class ProductsController {
	constructor($scope, ProductsService) {
    this.productList = ProductsService.getProductList();
    this.productList.forEach(product => {
      product.owners = ProductsService.getProductOwners(product.name);
      product.requesters = ProductsService.getProductRequesters(product.name);
    });
    this.$inject = ['$scope', 'ProductsService'];
  }
}
