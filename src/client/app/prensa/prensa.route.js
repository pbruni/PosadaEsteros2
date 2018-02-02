(function() {
    'use strict';
  
    angular
      .module('app.prensa')
      .run(appRun);
  
    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
      routerHelper.configureStates(getStates());
    }
  
    function getStates() {
      return [
        {
          state: 'prensa',
          config: {
            url: '/prensa',
            templateUrl: 'app/prensa/prensa.html',
            controller: 'PrensaController',
            controllerAs: 'vm',
            title: 'Prensa'
          }
        }
      ];
    }
  })();