'use strict';

angular.module('myApp.todoList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: 'todoList/view1.html',
    controller: 'View1Ctrl'
  });
}])

.service('todoListService',["$http","$log", function($http,$log){

  var self = this;
  this.items = [
    { item: 1, name: "todo 1", description: "This is todo item 1 description" },
    { item: 2, name: "todo 2", description: "This is todo item 2 description" }
  ];

  this.GetTodoList = function() {
    return self.items;
  }
}])

.controller('View1Ctrl', ["$scope","$log","todoListService", function($scope,$log,todoListService) {

  var self = this;

  $scope.list = function() {
    return todoListService.GetTodoList();
  }

}]);
