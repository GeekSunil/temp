/// <reference path="c:\users\sunil\documents\visual studio 2015\Projects\AngularProject\AngularProject\scripts/angular.js" />
var app = angular.module("myApp", []);



app.controller("MyContl", function ($scope,$interval) {
  $scope.intl   = new Date().toLocaleTimeString();
  $interval(function () {
      $scope.theTime = new Date().toLocaleTimeString();
  }, 1000);
   
});