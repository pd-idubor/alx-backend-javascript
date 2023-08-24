const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber test', () => {
  it('Two integers', () => {
    assert.equal(calculateNumber(1, 3), 4)
  });
  it('One none integer', () => {
    assert.equal(calculateNumber(1, 3.7), 5)
  });
  it('Two none integers', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5)
  });
  it('Again two none integers', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6)
  });
});
