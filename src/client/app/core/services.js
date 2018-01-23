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
      authenticate: authenticate
    };

    function authenticate(name, password, callback) {
      var request = $http({
        method: httpMethod.POST,
        url: appConfig.apiLogIn,
        data: {
          name: name,
          password: password
        }
      });
      return (request.then(handleSuccess, handleError));
    }

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
