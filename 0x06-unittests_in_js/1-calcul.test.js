const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber test', function () {
  describe('Sum check', function() {
    it('Two integers', function () {
      assert.equal(calculateNumber('SUM', 1, 3), 4)
    });
    it('One none nteger', function () {
      assert.equal(calculateNumber('SUM', 1, 3.7), 5)
    });
    it('Two none integers', function () {
      assert.equal(calculateNumber('SUM', 1.2, 3.7), 5)
    });
    it('Again two none integers', function () {
      assert.equal(calculateNumber('SUM', 1.5, 3.7), 6)
    });
    it('True fornegative non-integers', function () {
      assert.equal(calculateNumber('SUM', -1.5, -3.7), -5);
    });

  });
  describe('Subraction check', function() {
    it('Two integers', function () {
      assert.equal(calculateNumber('SUBTRACT', 7, 3), 4)
    });
    it('One none integer', function () {
      assert.equal(calculateNumber('SUBTRACT', -1, -3.7), 3)
    });
    it('Two none integers', function () {
      assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), -3)
    });
    it('Again two none integers', function () {
      assert.equal(calculateNumber('SUBTRACT', 9.5, 3.7), 6)
    });
    it('True for negative non-integers', function () {
      assert.equal(calculateNumber('SUBTRACT', -1.5, -2.7), 2);
    });

  });
  describe('Division check', function() {
    it('Two integers', function () {
      assert.equal(calculateNumber('DIVIDE', 1, 2), 0.5)
    });
    it('One none integer', function () {
      assert.equal(calculateNumber('DIVIDE', 3.7, 2), 2)
    });
    it('Two none integers one of which rounds to 0', function () {
      assert.equal(calculateNumber('DIVIDE', 1.2, 0.2), 'Error')
    });
    it('Again two none integers, with one -ve', function () {
      assert.equal(calculateNumber('DIVIDE', -7.5, 3.7), -1.75)
    });
    it('True for two negative non-integers', function () {
      assert.equal(calculateNumber('DIVIDE', -9.5, -2.7), 3);
    });

  });
});
