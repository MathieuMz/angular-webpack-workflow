export default class AuthController {
	constructor($scope) {
		debugger;
    this.title = $state.current.title;
    this.authType = $state.current.name.replace('app.', '');

    this.$inject = ['$scope'];
  }
}
