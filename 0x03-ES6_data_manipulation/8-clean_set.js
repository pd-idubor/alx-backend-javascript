export default function cleanSet(set, startString) {
  if (startString === '') {
    return ('');
  }
  const array = [];
  set.forEach((ele) => {
    if (ele.startsWith(startString)) {
      const str = Array.from(startString);
      const num = str.length;
      const res = Array.from(ele).slice(num).toString().replace(/,/g, '');
      array.push(res);
    }
  });
  return (array.toString().replace(/,/g, '-'));
}
