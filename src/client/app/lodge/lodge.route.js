(function() {
    'use strict';
  
    angular
      .module('app.lodge')
      .run(appRun);
  
    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
      routerHelper.configureStates(getStates());
    }
  
    function getStates() {
      return [
        {
          state: 'lodge',
          config: {
            url: '/lodge',
            templateUrl: 'app/lodge/lodge.html',
            controller: 'LodgeController',
            controllerAs: 'vm',
            title: 'Lodge'
          }
        }
      ];
    }
  })();