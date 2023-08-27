import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const result = await readDatabase(process.argv[2]);
      response.status(200).send(`This is the list of our result\n${result.join('\n')}`);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    try {
      const result = await readDatabase(process.argv[2]);
      const { major } = request.params;

      if (major === 'SWE') {
        const resultMajor = result[1].slice(-36);
        response.status(200).send(`${resultMajor}`);
      } else if (major === 'CS') {
        const resultMajor = result[0].slice(29);
        response.status(200).send(`${resultMajor}`);
      } else {
        response.status(500).send('Major parameter must be CS or SWE');
      }
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
