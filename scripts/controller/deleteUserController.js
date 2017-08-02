var deleteUserController = function($scope,UserAPI){
    $scope.found = false;
    $scope.user = {};
    $scope.submitForm = function(isValid){
        if(isValid){
            UserAPI.delete({firstName:$scope.firstName},function(data){
                if(!angular.isUndefined(data.firstName)){
                    $scope.found=true;
                    $scope.user.firstName = data.firstName;
                    $scope.user.lastName = data.lastName;
                    $scope.user.createdOn = data.createdOn;
                }
                else{
                    $scope.found=false;
                }
            });
        }
    }
};
var myApp = angular.module('myApp');
myApp.controller('deleteUserController',['$scope','UserAPI',deleteUserController]);