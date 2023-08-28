const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('return 10', function () {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const res = sendPaymentRequestToApi(100, 20);
    expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(res).to.equal(10);
    stub.restore();
  });
});
