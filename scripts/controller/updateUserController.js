var updateUserController = function($scope,UserAPI){
    $scope.found= false;
    $scope.updated = false;
    $scope.user = {};
    $scope.submitForm = function(isValid){
        if(isValid){
            var user = UserAPI.get({firstName:$scope.firstName}
                ,function(data){
                    if(!angular.isUndefined(data.firstName)){
                        $scope.found=true;
                        $scope.user._id = data._id;
                        $scope.user.firstName = data.firstName;
                        $scope.user.lastName = data.lastName;
                        $scope.user.createdOn = data.createdOn;
                        $scope.updated=false;
                    }
                    else{
                        $scope.found=false;
                    }
                }
            )
        }
    };
    $scope.updateUser=function(isValid){
        if(isValid){
            console.log(UserAPI.update({id:$scope.user._id},$scope.user));
            $scope.updated = true;
        }
    }
};
var myApp = angular.module('myApp');
myApp.controller('updateUserController',['$scope','$UserAPI',updateUserController]);