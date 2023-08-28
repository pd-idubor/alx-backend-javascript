const Utils = {
  calculateNumber: function (type, a, b) {
    const aa = Math.round(a);
    const bb = Math.round(b);

    if (type === 'SUM') {
      return aa + bb;
    } if (type === 'SUBTRACT') {
      return aa - bb;
    } if (type === 'DIVIDE') {
      if (bb === 0) {
        return 'Error';
      }
      return aa / bb;
    }
    return -1;
  }
}
module.exports = Utils;
