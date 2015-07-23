(function(){
	'use strict';

	angular
		.module('app.core')
		.config(route)

	function route($urlRouterProvider){
		$urlRouterProvider.otherwise('/');
	}

})();