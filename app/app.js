var CleanScreenApp = angular.module('CleanScreenApp', [
  'ngRoute',
  'CleanScreenControllers'
]);

CleanScreenApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/steps', {
        templateUrl: 'partials/steps.html',
        controller: 'StepsController'
      })
      .when('/steps/:stepId', {
        templateUrl: 'partials/step-details.html',
        controller: 'StepDetailsController'
      })
      .otherwise({
        redirectTo: '/steps'
      })
  }]);
