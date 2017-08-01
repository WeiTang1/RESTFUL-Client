var retriveUserController  = function($scope,UserAPI){
    $scope.user = {};
    $scope.found=false;
    $scope.submitForm = function(isValid){
        if(isValid){
            var user = UserAPI.get({firstName:$scope.firstName}
            ,function(data){
                if(!angular.isUndefined(data.firstName)){
                    $scope.found=true;
                    $scope.user.firstName = data.firstName;
                    $scope.user.lastName = data.lastName;
                    $scope.user.createdOn = data.createdOn;
                }
                else{
                    $scope.found=false;
                }
            }
            )}
    }
};
var myApp = angular.module('myApp');
myApp.controller('retriveUserController',['$scope','UserAPI',retriveUserController]);