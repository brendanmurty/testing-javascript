const assert = require('assert')
const { add } = require('./../index')

describe('Add function tests', function () {
    it('should return 25 for arguments 20 and 5', function () {
        const actual = add(20, 5);
        const expectation = 25;

        assert.equal(actual, expectation);
    });
});
