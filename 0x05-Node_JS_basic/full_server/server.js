const express = require('express');

const app = express();
const router = require('./routes/index');

app.use('/', router);
app.use('/students', router);
app.use('/students/:major', router);

const port = 1245;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
