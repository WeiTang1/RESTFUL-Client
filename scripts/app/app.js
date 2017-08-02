var app = angular.module('myApp',["ngRoute","ngResource"]);
app.config(function($routeProvider){
    $routeProvider
        .when('/listUser',{
       templateUrl:'templates/listUser.html',
        controller : listUserController
    })
        .when('/createUser',{
            templateUrl:'templates/createUser.html',
            controller: createUserCtrl
        })
        .when('/retriveUser',{
            templateUrl:'templates/RetriveUser.html',
            controller:retriveUserController
        })
        .when('/deleteUser',{
            templateUrl: ' templates/DeleteUser.html',
            controller:deleteUserController
        })
        .when('/updateUser',{
            templateUrl:'templates/updateUser.html',
            controller:updateUserController
        })
});