interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
  }

const studentOne: Student {
  firstName: 'Daisy';
  lastName: 'Id';
  age: 21;
  location: 'Earth'
  }
 
const studentTwo: Student {
  firstName: 'Giovanni';
  lastName: 'Ob';
  age: 12;
  location: 'Mars';
  }
 
const studentsList: Array<Student> = [studentOne, studentTwo];

