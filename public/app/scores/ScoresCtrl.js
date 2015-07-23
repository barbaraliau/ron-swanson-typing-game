(function(){
	angular
		.module('app.scores')
		.controller('ScoresCtrl', ScoresCtrl);

		ScoresCtrl.$inject = [ '$rootScope', '$scope']

		function ScoresCtrl($rootScope, $scope){
			var scope = $rootScope;
			var sc = this;
			sc.test = 'SCORES TEST';

		};//end ctrl

})(); //end IIFE