const readline = require('readline');

const readL = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const question = 'Welcome to Holberton School, what is your name?\n';
readL.question(question, (name) => {
  console.log(`Your name is: ${name}`);
  readL.close();
});
process.on('beforeExit', () => {
  console.log('This important software is now closing');
});
