(function () {
  'use strict';

  //Default environment variables
  var __env = { };

  if (window) { //Importa las variables si existen
    Object.assign(__env, window.__env);
  }

  angular
    .module('app.core')
    .constant('appConfig', __env);
})();
