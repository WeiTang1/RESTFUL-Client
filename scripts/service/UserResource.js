var service = function($resource){
    return $resource('http://ec2-52-14-188-104.us-east-2.compute.amazonaws.com:3000/User/:firstName',{}
    ,{
        'update': { method:'PUT',
        url:'http://ec2-52-14-188-104.us-east-2.compute.amazonaws.com:3000/User/:id',
        params:{id:'@id'}
        }

    });
};
var myApp = angular.module('myApp');
myApp.factory('UserAPI',service);