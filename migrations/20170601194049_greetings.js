
exports.up = function(knex, Promise) {
  return knex.schema.dropTableIfExists('memes')
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('memes')
};
