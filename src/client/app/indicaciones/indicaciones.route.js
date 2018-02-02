(function() {
    'use strict';
  
    angular
      .module('app.indicaciones')
      .run(appRun);
  
    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
      routerHelper.configureStates(getStates());
    }
  
    function getStates() {
      return [
        {
          state: 'indicaciones',
          config: {
            url: '/indicaciones',
            templateUrl: 'app/indicaciones/indicaciones.html',
            controller: 'IndicacionesController',
            controllerAs: 'vm',
            title: 'Indicaciones'
          }
        }
      ];
    }
  })();