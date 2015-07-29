(function(){

angular.module('app.game')
	.service('GameService', GameService)

// I don't know why I have to do this. The sample code shows that I can just call GameService.$inject = ['$q', '$http'] like in the controllers. My guess is because this is not at the app.core level?
	var ngInjector = angular.injector(["ng"]);
	var $http = ngInjector.get("$http");
	var $q = ngInjector.get("$q");

	function GameService($q, $http){
		var service = {
			getQuote: getQuote
		};
		return service;
	}

		//var fireUrl = new Firebase("https://typing-game.firebaseio.com/");

		function getQuote(){
			var deferred = $q.defer();
			var url = '//ron-swanson-quotes.herokuapp.com/quotes';
			$http({
				method: 'GET',
				url: url
			}).then(function(data){
				var results = data.data.quote;
				results = results.replace(/[^a-zA-Z :;.-?!,––­­‑—…]+/ig, "");
				//console.log(results);
				deferred.resolve(results);
			})
			return deferred.promise;
		}

	// this.getScores = function(){
	// 	return $firebase(new Firebase(firebaseUrl + '/scores/'));
	// };


})();
