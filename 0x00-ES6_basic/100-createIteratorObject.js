export default function createIteratorObject(report) {
  const arg = [];
  for (const x of Object.values(report.allEmployees).flat()) {
    arg.push(x);
  }
  return arg;
}
