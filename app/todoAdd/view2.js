'use strict';

var appTodoAdd = angular.module('myApp.todoAdd', ['ngRoute']);

appTodoAdd.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/add', {
    templateUrl: 'todoAdd/view2.html',
    controller: 'View2Ctrl'
  });
}]);

appTodoAdd.controller('View2Ctrl', ['$scope', function($scope) {

  $scope.master = {};

  $scope.update = function(todo) {
    $scope.master = angular.copy(todo);
  };

  $scope.reset = function() {
    $scope.todo = angular.copy($scope.master);
  };

  $scope.reset();

}]);
