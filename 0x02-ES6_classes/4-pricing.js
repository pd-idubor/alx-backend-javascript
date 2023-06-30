import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be an instance of Currency');
    }
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = amount;
    this._currency = currency;
  }

  set currency(curr) {
    this._currency = curr;
  }

  get currency() {
    return this._currency;
  }

  set amount(amt) {
    this._amount = amt;
  }

  get amount() {
    return this._amount;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Amount and Conversion rate must be numbers');
    }
    return amount * conversionRate;
  }
}
