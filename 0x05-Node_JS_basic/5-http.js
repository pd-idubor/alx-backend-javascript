const http = require('http');
const fs = require('fs');

async function countStudents(path) {
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

      console.log(`Number of students: ${chars.length}`);
      console.log(`Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`);
      console.log(`Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`);
      resolve();
    });
  });
}

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }

  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    await countStudents(process.argv[2]).then((result) => {
      res.end(result.join('\n'));
    }).catch((error) => {
      res.end(error.message);
    });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
