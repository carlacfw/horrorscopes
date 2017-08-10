
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', (table) => {
    table.increments('id')
    table.string('name')
    table.string('horoscope_id')
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')

};
