const express = require('express');
const dataService = require('../data/dataService.js');

const router = express.Router();

function getAll(req, res) {
  res.json(dataService.getAll())
}

function getItem(req, res) {
  const id = parseInt(req.params.id);

  const item = dataService.get(id);

  if (!item) {
    res.sendStatus(404);
    return;
  }

  res.json(item);
}

function addItem(req, res) {
  const item = dataService.add(req.body);

  if (!item) {
    res.sendStatus(409);
    return;
  }

  res.json(item);
}

router.get('/', getAll);

router.get('/:id', getItem);

module.exports = {
  router,
  // functions are only exported for the tests
  getAll,
  getItem,
  addItem,
};
