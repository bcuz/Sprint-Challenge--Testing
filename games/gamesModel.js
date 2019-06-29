const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  // // update,
  // remove,
  // findById,
  getAll,
};

function getAll() {
  return db('games');
}

async function insert(game) {
  return db('games')
    .insert(game)
    .then(ids => {
      return ids[0]
      // return getById(ids[0]);
    });

}

// function remove(id) {
//   return db('users')
//     .where({ id })
//     .del();
// }