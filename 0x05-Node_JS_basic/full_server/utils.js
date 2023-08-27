const fs = require('fs');

async function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const rows = data.split('\n').filter((row) => row !== '');
      const cols = rows.shift().split(',');
      const chars = rows.map((row) => row.split(','));
      const idx = cols.indexOf('field');
      const CS = chars.filter((cas) => cas[idx] === 'CS').map((cas) => cas[0]);
      const SWE = chars.filter((cas) => cas[idx] === 'SWE').map((cas) => cas[0]);

      const output = [];
      output.push(`Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`);
      output.push(`Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`);
      resolve(output);
    });
  });
}
module.exports = readDatabase;
