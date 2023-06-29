export default function createIteratorObject(report) {
  let arg = [];
  for (let x of Object.values(report.allEmployees).flat()) {
    arg.push(x);
  }
  return arg;
}
