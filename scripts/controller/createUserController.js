var createUserCtrl = function($scope,$resource,UserAPI,$timeout){
    $scope.created = false;
    $scope.submitForm = function(isValid){
        if(isValid){
            console.log('here');
            UserAPI.save($scope.user);
            $scope.created=true;
            $timeout(function(){
                $scope.created = false;
            },2000);

        };
    };
};
var myApp = angular.module('myApp');
myApp.controller('createUserController',['$scope','$resource','UserAPI',"$timeout",createUserCtrl]);