//Take a look at the following link for details on how to test
//https://mochajs.org/#mochaopts
var assert = require('assert');
describe('Array', function () {
//    this.timeout(500);
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
});