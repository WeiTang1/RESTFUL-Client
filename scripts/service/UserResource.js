var service = function($resource){
    return $resource('http://localhost:3000/User/:firstName');
};
var myApp = angular.module('myApp');
myApp.factory('UserAPI',service);