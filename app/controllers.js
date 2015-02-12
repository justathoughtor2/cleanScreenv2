var CleanScreenControllers = angular.module('CleanScreenControllers', []);

CleanScreenControllers
  .controller('StepsController',
    ['$scope', '$http', function($scope, $http) {
      $http.get('partials/steps.json').success(function(data) {
        $scope.steps = data;
      });
      $scope.orderProp = 'number';
    }])
  .controller('StepDetailsController', ['$scope', '$routeParams',
    function($scope, $routeParams) {
      $scope.stepId = $routeParams.routeId;
    }]);
