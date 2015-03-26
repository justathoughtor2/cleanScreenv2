var CleanScreenControllers = angular.module('CleanScreenControllers', []);

CleanScreenControllers
  .controller('StepsController',
    ['$scope', '$http', function($scope, $http) {
      $http.get('json/steps.json').success(function(data) {
        $scope.steps = data;
      });
      $scope.orderProp = 'number';
    }])
  .controller('StepDetailsController',
    ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
      $http.get('json/' + $routeParams.stepId + '.json').success(function(data) {
        $scope.step = data;
      });
    }])
  .controller('AssumptionsController',
    ['$scope', '$http', function($scope, $http) {
      $http.get('json/assumptions.json').success(function(data) {
        $scope.assumptions = data;
      });
      $scope.orderProp = 'number';
    }])
  .controller('MandatorySuppliesController',
    ['$scope', '$http', function($scope, $http) {
      $http.get('json/mandatory-supplies.json').success(function(data) {
        $scope.mandatorySupplies = data;
      });
      $scope.orderProp = 'number';
    }])
  .controller('OptionalSuppliesController',
  ['$scope', '$http', function($scope, $http) {
    $http.get('json/optional-supplies.json').success(function(data) {
      $scope.optionalSupplies = data;
    });
    $scope.orderProp = 'number';
  }])
  .controller('ThingsToAvoidController',
  ['$scope', '$http', function($scope, $http) {
    $http.get('json/avoid.json').success(function(data) {
      $scope.avoids = data;
    });
    $scope.orderProp = 'number';
  }])
