const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const assert = require('assert');

describe('sendPaymentRequestToApi', function () {
  beforeEach(function () {
    sinon.spy(Utils, 'calculateNumber');
  });
  afterEach(function () {
    Utils.calculateNumber.restore();
  });

  it('return 120', function () {
    const res = sendPaymentRequestToApi(100, 20);
    assert.strictEqual(Utils.calculateNumber.calledOnceWithExactly('SUM', 100, 20), true);
    assert.strictEqual(res, 120);
  });

  it('return 20', function () {
    const res = sendPaymentRequestToApi(10, 10);
    assert.strictEqual(Utils.calculateNumber.calledOnceWithExactly('SUM', 10, 10), true);
    assert.strictEqual(res, 20);
  });
});
