export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return ('');
  }
  const array = [];
  set.forEach((ele) => {
    if (ele.startsWith(startString)) {
      array.push((ele).replace(startString, ''));
    }
  });
  return (array.join('-'));
}
