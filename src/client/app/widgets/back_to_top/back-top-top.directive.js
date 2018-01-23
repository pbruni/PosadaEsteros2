(function () {
  'use strict';

  angular.module('app.widgets')
    .directive('backToTop', backTopTop);

  backTopTop.$inject = ['$window', '$anchorScroll'];
  /* @ngInject */
  function backTopTop($window, $anchorScroll) {
    var directive = {
      restrict: 'E',
      replace: true,
      template: '<span class="back-to-top"><i class="fa fa-2x fa fa-arrow-circle-up"></i></span>',
      link: linkFunc
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {
      el[0].style.display = 'none';
      angular.element(document).bind('scroll', function () {
        if ($window.pageYOffset > 100){
          el[0].style.display = 'block';
        }
        else{
          el[0].style.display = 'none';
        }
      });

      el.bind('click', function () {
        $anchorScroll();
      });
    }
  }
})();
