const db = require('../data/dbConfig.js');

module.exports = {
  // insert,
  // // update,
  // remove,
  // findById,
  getAll,
};

function getAll() {
  return db('games');
}

// async function insert(user) {
//   return db('users').insert(user)

// }

// function remove(id) {
//   return db('users')
//     .where({ id })
//     .del();
// }