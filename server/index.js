const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dividends = require('./api/dividends/dividends.js');

const mongiURI = 'mongodb://localhost:27017/addierwerk';

const app = express();

app.use(bodyParser.json());
mongoose
  .connect(mongiURI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use('/api/dividends', dividends);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
