(function(){
	angular
		.module('app.welcome')
		.controller('WelcomeCtrl', WelcomeCtrl);

		WelcomeCtrl.$inject = [ '$rootScope', '$scope']

		function WelcomeCtrl($rootScope, $scope){
			var scope = $rootScope;
			var we = this;
			we.test = 'WELCOME TEST';

		};//end ctrl

})(); //end IIFE