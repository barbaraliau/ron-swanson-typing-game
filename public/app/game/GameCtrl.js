(function(){
	angular
		.module('app.game')
		.controller('GameCtrl', GameCtrl);

		GameCtrl.$inject = [ '$rootScope', '$scope', 'GameService', '$state', 'firstQuote']

		function GameCtrl($rootScope, $scope, GameService, $state, firstQuote){
			var scope = $rootScope;
			var ga = this;
			var counter = 0;
			var i = 0;
			ga.divArray = makeDivArray();
			ga.change = [];
			ga.compareQuote = compareQuote;
			ga.getSwanson = getSwanson;
			ga.swansonQuote = firstQuote;

			// getSwanson();

			// $scope.$watch(function(){
			// 	return $scope.$parent.start
			// }, function(){
			// 	if($scope.$parent.start){
			// 		getSwanson();
			// 	}
			// })

			function getSwanson(){
				GameService.getQuote().then(function(quote){
					console.log(quote);
					ga.swansonQuote = quote;
				})
			};

			function makeDivArray(){
				var divArray = [];
				for (var i = 0; i < 120; i++) {
					divArray.push({id: i});
				}
					//console.log(divArray);
					return divArray;
			};

			function compareQuote(){
				var textIndex = ga.textInput.length - 1;
				var quoteIndex = ga.swansonQuote.length - 1;

				if(textIndex === counter) {
					if(ga.swansonQuote.indexOf(ga.textInput) === 0) {
						ga.change[i] = true;
						counter++;
						i++;
						console.log('counter', counter)
					}
				}
				if(textIndex === quoteIndex) {
					GameService.getQuote().then(function(quote){
						ga.swansonQuote = quote;
						counter = 0;
					});
					ga.textInput = '';
				}
				if(i === 120) {
					alert("Finished!")
				}
			};




		};//end ctrl

})(); //end IIFE