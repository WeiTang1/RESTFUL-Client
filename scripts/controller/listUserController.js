var listUserController = function($scope,$resource,$location,UserAPI){
    var users = UserAPI.query(function(){
        console.log(users);
    });
    $scope.users = users;
    $scope.isActive = function(viewLocation){
        return viewLocation == $location.path();
    }
};

var myApp = angular.module('myApp');
myApp.controller('listUserController',['$scope','$resource','$location','UserAPI',listUserController]);