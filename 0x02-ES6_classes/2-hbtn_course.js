export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(strName) {
    if (typeof strName === 'string') {
      this._name = strName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get name() {
    return this._name;
  }

  set length(numLenght) {
    if (typeof numLenght === 'number') {
      this._length = numLenght;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get length() {
    return this._length;
  }

  set students(arrStudents) {
    if (Array.isArray(arrStudents)) {
      this._students = arrStudents;
    } else {
      throw new TypeError('Students must be an array');
    }
  }

  get students() {
    return this._students;
  }
}
