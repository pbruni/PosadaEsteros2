(function() {
    'use strict';
  
    angular
      .module('app.reserva')
      .run(appRun);
  
    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
      routerHelper.configureStates(getStates());
    }
  
    function getStates() {
      return [
        {
          state: 'reserva',
          config: {
            url: '/reserva',
            templateUrl: 'app/reserva/reserva.html',
            controller: 'ReservaController',
            controllerAs: 'vm',
            title: 'Reserva'
          }
        }
      ];
    }
  })();