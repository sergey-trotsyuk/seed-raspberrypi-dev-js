const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const listener = app.listen(3000, () => {
  console.log(`Server started on port ${listener.address().port}!`);
});
