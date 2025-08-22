// Define the AngularJS app
var app = angular.module('studentApp', []);

// Define the controller
app.controller('StudentController', function($scope) {
    $scope.student = {
        name: "John Doe",
        roll: "101",
        course: "Computer Science"
    };
});
