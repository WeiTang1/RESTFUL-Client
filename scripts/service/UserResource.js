var service = function($resource){
    return $resource('http://ec2-18-220-191-94.us-east-2.compute.amazonaws.com:3000/User/:firstName',{}
    ,{
        'update': { method:'PUT',
        url:'http://ec2-18-220-191-94.us-east-2.compute.amazonaws.com:3000/User/:id',
        params:{id:'@id'}
        }

    });
};
angular.module('myApp').factory('UserAPI',service);