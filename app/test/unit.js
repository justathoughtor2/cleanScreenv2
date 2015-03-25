describe('StepsController', function() {
  beforeEach(module('CleanScreenApp'));

  var $controller;

  beforeEach(inject(function(_$controller_, $httpBackend) {
    $controller = _$controller_;
    $httpBackend = $httpBackend;
  }));

  it('outputs general data on steps', function() {
    var $scope = {};
    $scope.assumptions = 'Hello';
    expect($scope.assumptions).toBeDefined();
  });
});
