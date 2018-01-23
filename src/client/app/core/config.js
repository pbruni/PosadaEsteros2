(function() {
  'use strict';

  var core = angular.module('app.core');

  var config = {
    appErrorPrefix: '[mobile Error] ',
    appTitle: 'mobile'
  };

  core.value('config', config);

  core.config(configure);

  configure.$inject = ['$logProvider', '$httpProvider', 'jwtOptionsProvider','routerHelperProvider', 'exceptionHandlerProvider'];
  /* @ngInject */
  function configure($logProvider, $httpProvider, jwtOptionsProvider, routerHelperProvider, exceptionHandlerProvider) {
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }
    exceptionHandlerProvider.configure(config.appErrorPrefix);
    routerHelperProvider.configure({ docTitle: config.appTitle + ': ' });

  }

})();
