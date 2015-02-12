var CleanScreenApp = angular.module('CleanScreenApp', [
  'ngRoute',
  'CleanScreenControllers'
]);

CleanScreenApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/steps', {
        templateUrl: 'steps/steps.html',
        controller: 'StepsController'
      })
      .when('/steps/:stepId', {
        templateUrl: 'steps/step-details.html',
        controller: 'StepDetailsController'
      })
      .otherwise({
        redirectTo: '/steps'
      })
  }]);
