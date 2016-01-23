/**
 * Created by andrew on 1/23/16.
 */

angular.module('myApp.controllers',[])
  .controller('TodoListController', ['$scope', '$http', function($scope, $http) {
    $scope.greeting = 'Hola!';
    $scope.todos = ['Do this', 'Do that'];
}]);
