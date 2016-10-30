export default class ProductsService {
    constructor() {
    }

    getProductList() {
      return JSON.parse(localStorage.getItem('products'));
    }

    getProductOwners(product) {
      let owners = JSON.parse(localStorage.getItem('ownerships'));
      return owners.filter(owner =>
        owner.productName === product
      );
    }

    getProductRequesters(product) {
      let requesters = JSON.parse(localStorage.getItem('testRequests'));
      return requesters.filter(requester =>
        requester.productName === product
      );
    }
}
