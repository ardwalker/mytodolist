'use strict';

var appTodoList = angular.module('myApp.todoList', ['ngRoute']);

appTodoList.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: 'todoList/todoList.html',
    controller: 'TodoListCtrl'
  });
}]);

appTodoList.service('todoListService',["$http","$log", function($http,$log){
  var self = this;

  this.items = [
    { item: 1, name: "todo 1", description: "This is todo item 1 description" },
    { item: 2, name: "todo 2", description: "This is todo item 2 description" }
  ];

  this.GetTodoList = function() {
    return self.items;
  }
}]);

appTodoList.controller('TodoListCtrl', ["$scope","$log","todoListService", function($scope,$log,todoListService) {

  var self = this;

  $scope.list = function() {
    return todoListService.GetTodoList();
  }

}]);
