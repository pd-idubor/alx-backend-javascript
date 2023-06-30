export default class HolbertonClass {
  constructor(size, location) {
    if (typeof location !== 'string') {
      throw new TypeError('location must be a string');
    }
    if (typeof size !== 'number') {
      throw new TypeError('size must be a number');
    }
    this._location = location;
    this._size = size;
  }

  [Symbol.toPrimitive](Class) {
    if (Class === 'number') {
      return this._size;
    }
    if (Class === 'string') {
      return this._location;
    }
    return null;
  }
}
