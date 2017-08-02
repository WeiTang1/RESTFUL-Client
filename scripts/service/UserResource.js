var service = function($resource){
    return $resource('http://localhost:3000/User/:firstName',{}
    ,{
        'update': { method:'PUT',
        url:'http://localhost:3000/User/:id',
        params:{id:'@id'}
        }

    });
};
var myApp = angular.module('myApp');
myApp.factory('UserAPI',service);