const getPaymentTokenFromAPI = require("./6-payment_token");
const assert = require("assert");

describe("getPaymentTokenFromAPI", function () {
  it("promise resolution with the correct object", function (done) {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        assert.strictEqual(response.data, "Successful response from the API");
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
