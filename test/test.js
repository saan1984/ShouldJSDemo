var assert = require("assert"),
    should = require("should")
    operation = require('../number-operation');

describe('Testing addTwoNumber', function() {
    it('should return 4 when the input number are 1 and 3', function () {
        operation.addTwoNumber(1,3).should.be.exactly(4);
    });
});
