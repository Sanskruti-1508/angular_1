// Define AngularJS module
var app = angular.module('myApp', []);

// Define a controller
app.controller('MyController', function($scope) {
    $scope.message = "Hello, AngularJS!";
});
