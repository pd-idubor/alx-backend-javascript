export default function updateStudentGradeByCity(list, city, newGrades) {
  const result = list.filter((elem) => elem.location === city);
  return result.map((obj) => {
    const corr = newGrades.find((ele) => ele.studentId === obj.id);
    /* eslint-disable */
    if (typeof (corr) === 'undefined') {
      obj.grade = 'N/A';
    } else {
      obj.grade = corr.grade;
    }
    /* eslint-enable */
    return obj;
  });
}
