export default function getStudentsByLocation(list, city) {
  return list.filter((ele) => ele.location === city);
}
