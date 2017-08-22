'user strict';
describe('App service',function(){


    beforeEach(module('myApp'));
    var UserAPI = {};
    beforeEach(inject(function(_UserAPI_){
        UserAPI = _UserAPI_;
    }));
    it('inject Service should work find',function(){

        expect(3).toBe(3);
        });
});