var createUserCtrl = function($scope,$resource,UserAPI){
    $scope.submitForm = function(isValid){
        if(isValid){
            UserAPI.save($scope.user);
        };
    };
};
var myApp = angular.module('myApp');
myApp.controller('createUserController',['$scope','$resource','UserAPI',createUserCtrl]);