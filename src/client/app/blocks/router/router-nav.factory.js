/* Help configure the state-base ui.router */
(function () {
  'use strict';

  angular
    .module('blocks.router')
    .factory('routerNavFactory', routerNavFactory);

  routerNavFactory.$inject = ['routerHelper'];
  /* @ngInject */
  function routerNavFactory(routerHelper) {

    return {
      delegate: {},
      data: {},
      get: function (name) {
        return this.data[name];
      },
      set: function (name, value) {
        this.data[name] = value;
        if (angular.isDefined(this.delegate) && angular.isDefined(value)) {
          routerHelper.setNextState(value.stateName);
          this.delegate(value);
        }
      },
      leftAction: function(){
        window.history.back();
      },
      rightAction: function () {
        routerHelper.nextState();
      }
    }
  }
})();
