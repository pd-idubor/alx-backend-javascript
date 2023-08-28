const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('display console message with total', () => {
    const test = sinon.spy(Utils, 'calculateNumber');
    const res = sendPaymentRequestToApi(100, 20);
    expect(test.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(res).to.equal(120);
    test.restore();
  });
});
