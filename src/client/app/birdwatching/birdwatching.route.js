(function() {
    'use strict';
  
    angular
      .module('app.birdwatching')
      .run(appRun);
  
    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
      routerHelper.configureStates(getStates());
    }
  
    function getStates() {
      return [
        {
          state: 'birdwatching',
          config: {
            url: '/birdwatching',
            templateUrl: 'app/birdwatching/birdwatching.html',
            controller: 'BirdWatchingController',
            controllerAs: 'vm',
            title: 'Bird watching'
          }
        }
      ];
    }
  })();