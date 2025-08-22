// Define the AngularJS module
var app = angular.module('bindingApp', []);

// Define the controller
app.controller('BindingController', function($scope) {
    $scope.studentName = "John Doe"; // Initial value
});
