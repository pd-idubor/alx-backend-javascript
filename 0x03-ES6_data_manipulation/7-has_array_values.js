export default function hasValuesFromArray(set, array) {
  let val = true;
  array.forEach((ele) => {
    if (set.has(ele) !== true) {
      val = false;
    }
  });
  return val;
}
