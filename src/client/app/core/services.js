(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('services', services);

  services.$inject = ['$http', '$q', 'exception', 'logger', 'appConfig'];
  /* @ngInject */
  function services($http, $q, exception, logger, appConfig) {
    var httpMethod = {
      GET: 'GET',
      POST: 'POST',
      PUT: 'PUT',
      DELETE: 'DELETE'
    };

    return {
    };


    function handleError(response) {
      if (!angular.isObject(response.data) ||
        !response.data.message
      ) {
        return ($q.reject('Ha ocurrido un error.'));
      }

      return ($q.reject(response.data.message));
    }

    function handleSuccess(response) {
      return (response.data.results);
    }
  }
})();
