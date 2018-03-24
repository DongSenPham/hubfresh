const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ Hi: 'deploy heroku application' });
});

PORT = process.env.PORT || 5000;
app.listen(PORT);
