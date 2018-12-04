const express = require('express');
const reader = require('./../../readers/dividendsReader.js');
const Dividend = require('./Dividend');

const router = express.Router();

router.put('/', (req, res) => {
  Dividend.deleteMany({}, (err) => {
    if (err) {
      res.json(err);
    }
  });

  res.json(reader.read());
});

router.get('/all', (req, res) => {
  Dividend.find((err, polls) => {
    if (err) {
      res.json(err);
      return;
    }

    res.json(polls);
  }).sort({ field: 'asc', date: -1 });
});

router.get('/allDividends', (req, res) => {
  Dividend.find((err, polls) => {
    if (err) {
      res.json(err);
      return;
    }

    let sum = 0;
    for (let i = 0; i < polls.length; i++) {
      sum += polls[i].value;
    }

    res.json(sum.toFixed(2));
  });
});

router.get('/allDividends/:id', (req, res) => {
  Dividend.find({ "date": { "$gte": new Date(req.params.id, 0, 1), "$lt": new Date(req.params.id, 11, 31) } }, (err, polls) => {
    if (err) {
      res.json(err);
      return;
    }

    let sum = 0;
    for (let i = 0; i < polls.length; i++) {
      sum += polls[i].value;
    }

    res.json(sum.toFixed(2));
  });
});

module.exports = router;
