(function () {
  'use strict';

  angular.module('app.core')
    .run(run);

  run.$inject = ['$rootScope', '$http', '$state', '$location'];
  /* @ngInject */
  function run($rootScope, $http, $state, $location) {

    // redirect to login page if not logged in and trying to access a restricted page
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
      var publicPages = ['/login', '/main'];
      var restrictedPage = publicPages.indexOf($location.path()) === -1;
      if (restrictedPage && !user) {
        $state.go('login');
      }
    });
  }
})();
