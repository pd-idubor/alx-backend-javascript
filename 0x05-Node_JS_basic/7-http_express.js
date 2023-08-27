const express = require('express');
const fs = require('fs');

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      } const rows = data.split('\n').filter((row) => row !== '');
      const cols = rows.shift().split(','); const chars = rows.map((row) => row.split(','));
      const idx = cols.indexOf('field');

      const CS = chars.filter((cas) => cas[idx] === 'CS').map((cas) => cas[0]); const SWE = chars.filter((cas) => cas[idx] === 'SWE').map((cas) => cas[0]);

      const output = [];
      output.push(`Number of students: ${chars.length}`);
      output.push(`Number of students in CS: ${CS.length}. List: ${CS
        .join(', ')}`);
      output.push(`Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`);
      resolve(output);
    });
  });
}

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const data = await countStudents(process.argv[2]);
    res.send(`This is the list of our students\n${data.join('\n')}`);
  } catch (error) {
    res.send(`This is the list of our students\n${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
