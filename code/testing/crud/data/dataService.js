const { cloneDeep } = require('lodash');
const { data } = require('./data.js');

function getAll() {
  // If we returned the actual data object, it could accidentally get edited and this whole service could be bypassed
  // so, we make a copy first and return that instead
  // Try returning without cloneDeep, the test for this will fail as it edits the data
  // https://lodash.com/docs/4.17.15#cloneDeep
  return cloneDeep(data);
}

function get(id) {
  return cloneDeep(data.find((item) => item.id === id));
}

function add(newItem) {
  const index = data.push(cloneDeep(newItem)) - 1;
  return cloneDeep(data[index]);
}

module.exports = {
  getAll,
  get,
  add,
};
