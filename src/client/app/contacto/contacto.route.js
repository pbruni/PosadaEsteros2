(function() {
    'use strict';
  
    angular
      .module('app.contacto')
      .run(appRun);
  
    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
      routerHelper.configureStates(getStates());
    }
  
    function getStates() {
      return [
        {
          state: 'contacto',
          config: {
            url: '/contacto',
            templateUrl: 'app/contacto/contacto.html',
            controller: 'ContactoController',
            controllerAs: 'vm',
            title: 'Contacto'
          }
        }
      ];
    }
  })();