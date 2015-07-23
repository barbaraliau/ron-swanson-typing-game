(function(){

angular.module('app.game')
	.factory('GameService', GameService)

	var myInjector = angular.injector(["ng"]);
	var $http = myInjector.get("$http");
	var $q = myInjector.get("$q");

	function GameService($q, $http){
		var service = {
			getQuote: getQuote
		};
		return service;
	}

		//var fireUrl = new Firebase("https://typing-game.firebaseio.com/");

		function getQuote(){
			var deferred = $q.defer();
			$http({
				method: 'GET',
				url: "http://ron-swanson-quotes.herokuapp.com/quotes"
			}).then(function(data){
				var results = data.data.quote;
				results = results.replace(/[^a-zA-Z :;.-?!,––­­‑—…]+/ig, "");
				console.log(results);
				deferred.resolve(results);
			})
			return deferred.promise;
		}

	// this.getScores = function(){
	// 	return $firebase(new Firebase(firebaseUrl + '/scores/'));
	// };


})();
