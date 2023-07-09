export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  if (position >= length) {
    return new Error('Position outside range');
  }
  const view = new Int8Array(buffer);
  view[position] = value;
  return (buffer);
}
