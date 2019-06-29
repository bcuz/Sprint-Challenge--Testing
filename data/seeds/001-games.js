// ./seeds/001-roles.js
exports.seed = function(knex, Promise) {
  // the 00-cleanup.js seed already deleted all records
  // we just worry about seeding records in all other seeds
  return knex('games').insert([
    {
      title: 'Pacman', // required
      genre: 'Arcade', // required
      releaseYear: 1980 // not required
    },
    {
      title: 'Shovel Knight', // required
      genre: 'Action', // required
      releaseYear: 2014 // not required
    }
  ]);
};