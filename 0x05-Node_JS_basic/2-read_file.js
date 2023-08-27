const fs = require('fs');

function countStudents(path) {
  if (!path) {
    throw new Error('Cannot load the database');
  }
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const rows = data.split('\n').filter((row) => row !== '');
    const cols = rows.shift().split(',');
    const chars = rows.map((row) => row.split(','));
    const idx = cols.indexOf('field');

    const CS = chars.filter((cas) => cas[idx] === 'CS').map((cas) => cas[0]);
    const SWE = chars.filter((cas) => cas[idx] === 'SWE').map((cas) => cas[0]);

    console.log(`Number of chars: ${chars.length}`);
    console.log(`Number of chars in CS: ${CS.length}. List: ${CS.join(', ')}`);
    console.log(`Number of chars in SWE: ${SWE.length}. List: ${SWE.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
