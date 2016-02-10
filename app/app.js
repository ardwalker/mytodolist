'use strict';


// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.todoList',
  'myApp.todoAdd',
  'myApp.version'
])

//.controller('TodoListController', ['$scope', function($scope) {
//  $scope.greeting = 'Hola!';
//  $scope.todos = ['Do this', 'Do that'];
//}])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .otherwise ({
      redirectTo: '/list'
    });
}]);
