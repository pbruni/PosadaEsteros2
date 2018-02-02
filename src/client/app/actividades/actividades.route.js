(function() {
    'use strict';
  
    angular
      .module('app.actividades')
      .run(appRun);
  
    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
      routerHelper.configureStates(getStates());
    }
  
    function getStates() {
      return [
        {
          state: 'actividades',
          config: {
            url: '/actividades',
            templateUrl: 'app/actividades/actividades.html',
            controller: 'ActividadesController',
            controllerAs: 'vm',
            title: 'Actividades'
          }
        }
      ];
    }
  })();