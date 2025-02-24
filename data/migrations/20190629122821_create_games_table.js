exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', function(tbl) {
    // we must use the callback syntax for .createTable()
    tbl.increments();

    tbl
      .string('title')
      .notNullable()
    tbl
      .string('genre')
      .notNullable()
    tbl
      .integer('releaseYear')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('games');
};