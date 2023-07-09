export default function getStudentIdsSum(list) {
  const i = 0;
  const array = list.map((ele) => ele.id);
  return array.reduce((result, curr) => result + curr, i);
}
