//Define AngularJS app
var app = angular.module("studentApp", []);


//Define Controller
app.controller("StudentController", function ($scope)  {
    $scope.student = {
        name: "Sanskruti Katwate",
        roll: "22",
        course: "Computer Science"
    };
    });