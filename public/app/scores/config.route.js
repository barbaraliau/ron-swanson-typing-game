(function() {
    'use strict';

    angular
        .module('app.scores')
        .config(routes);

    function routes ($stateProvider) {
        $stateProvider
        // individual mentor view for public
            .state('scores', {
            url: '/scores',
            templateUrl: 'app/scores/scores.html',
            controller: 'ScoresCtrl',
            controllerAs: 'sc',
            resolve: {
                //authenticate:
            }
        })
    }

})();