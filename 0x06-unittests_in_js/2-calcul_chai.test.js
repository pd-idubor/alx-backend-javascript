const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber test', function () {
  describe('Sum check', function() {
    it('Two integers', function () {
      expect(4).to.equal(calculateNumber('SUM', 1, 3))
    });
    it('One none nteger', function () {
      expect(5).to.equal(calculateNumber('SUM', 1, 3.7))
    });
    it('Two none integers', function () {
      expect(5).to.equal(calculateNumber('SUM', 1.2, 3.7))
    });
    it('Again two none integers', function () {
      expect(6).to.equal(calculateNumber('SUM', 1.5, 3.7))
    });
    it('True fornegative non-integers', function () {
      expect(-5).to.equal(calculateNumber('SUM', -1.5, -3.7));
    });

  });
  describe('Subraction check', function() {
    it('Two integers', function () {
      expect(4).to.equal(calculateNumber('SUBTRACT', 7, 3), 4)
    });
    it('One none integer', function () {
      expect(3).to.equal(calculateNumber('SUBTRACT', -1, -3.7))
    });
    it('Two none integers', function () {
      expect(-3).to.equal(calculateNumber('SUBTRACT', 1.2, 3.7))
    });
    it('Again two none integers', function () {
      expect(6).to.equal(calculateNumber('SUBTRACT', 9.5, 3.7))
    });
    it('True for negative non-integers', function () {
      expect(2).to.equal(calculateNumber('SUBTRACT', -1.5, -2.7));
    });

  });
  describe('Division check', function() {
    it('Two integers', function () {
      expect(0.5).to.equal(calculateNumber('DIVIDE', 1, 2), 0.5)
    });
    it('One none integer', function () {
      expect(2).to.equal(calculateNumber('DIVIDE', 3.7, 2), 2)
    });
    it('Two none integers one of which rounds to 0', function () {
      expect('Error').to.equal(calculateNumber('DIVIDE', 1.2, 0.2))
    });
    it('Again two none integers, with one -ve', function () {
      expect(-1.75).to.equal(calculateNumber('DIVIDE', -7.5, 3.7))
    });
    it('True for two negative non-integers', function () {
      expect(3).to.equal(calculateNumber('DIVIDE', -9.5, -2.7));
    });

  });
});
