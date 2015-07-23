(function(){
	angular
		.module('app.game')
		.controller('GameCtrl', GameCtrl);

		GameCtrl.$inject = [ '$rootScope', '$scope', 'GameService']

		function GameCtrl($rootScope, $scope, GameService){
			var scope = $rootScope;
			var ga = this;
			ga.test = 'GAME TEST';
			ga.divArray = makeDivArray();
			ga.change = [];
			ga.compareQuote = compareQuote;
			ga.swansonQuote;
			ga.getSwanson = getSwanson;

			getSwanson();

			$scope.$watch(function(){
				return $scope.$parent.start
			}, function(){
				if($scope.$parent.start){
					getSwanson();
				}
			})

			function makeDivArray(){
				var divArray = [];
				for (var i = 0; i < 120; i++) {
					divArray.push({id: i});
				}
					console.log(divArray);
					return divArray;
			};

			var counter = 0;
			var i = 0;

			function compareQuote(){
				if((ga.textInput.length - 1) === counter) {
					if(ga.swansonQuote.indexOf(ga.textInput) === 0) {
						ga.change[i] = true;
						counter++;
						i++;
					}
				}
				if(ga.textInput.length - 1 === ga.swansonQuote.length - 1) {
					gameService.getQuote().then(function(quote){
						ga.swansonQuote = quote;
						ga.textInput = "";
						counter = 0;
					})
				}
				if(i === 120) {
					alert("Finished!")
				}
			};


			function getSwanson(){
				GameService.getQuote().then(function(quote){
					ga.swansonQuote = quote;
				})
			};

		};//end ctrl

})(); //end IIFE