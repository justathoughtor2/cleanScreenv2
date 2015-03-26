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
      .when('/assumptions', {
        templateUrl: 'partials/assumptions.html',
        controller: 'AssumptionsController'
      })
      .when('/mandatory-supplies', {
        templateUrl: 'partials/mandatory-supplies.html',
        controller: 'MandatorySuppliesController'
      })
      .when('/optional-supplies', {
        templateUrl: 'partials/optional-supplies.html',
        controller: 'OptionalSuppliesController'
      })
      .when('/avoid', {
        templateUrl: 'partials/avoid.html',
        controller: 'ThingsToAvoidController'
      })
      .otherwise({
        redirectTo: '/steps'
      });
  }]);

var Linking = angular.module('Linking', [
  'ngRoute',
  'LinkingControllers'
]);
