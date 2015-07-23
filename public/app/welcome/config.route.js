(function() {
    'use strict';

    angular
        .module('app.welcome')
        .config(routes);

    function routes ($stateProvider) {
        $stateProvider
        // individual mentor view for public
            .state('welcome', {
            url: '/',
            templateUrl: 'app/welcome/welcome.html',
            controller: 'WelcomeCtrl',
            controllerAs: 'we',
            resolve: {
                //authenticate:
            }
        })
    }

})();