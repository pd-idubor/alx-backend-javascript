export default function iterateThroughObject(reportWithIterator) {
  const arr = [];
  for (const obj of reportWithIterator) {
    arr.push(obj);
  }
  let x = 0;
  while (x < arr.length - 1) {
    arr[x] += ' |';
    /* eslint-disable */
    x++;
  }
  return arr.join(' ');
}
