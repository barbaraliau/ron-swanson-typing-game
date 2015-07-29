(function() {
    'use strict';

    angular
        .module('app.game')
        .config(routes);

    function routes ($stateProvider) {
        $stateProvider
        // individual mentor view for public
            .state('game', {
            url: '/game',
            templateUrl: 'app/game/game.html',
            controller: 'GameCtrl',
            controllerAs: 'ga',
            resolve: {
                firstQuote: function(GameService){
                //authenticate:
                return GameService.getQuote();
                }
            }
        });
    }

})();