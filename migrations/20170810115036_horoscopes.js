
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('horoscopes', (table) => {
    table.increments('id')
    table.string('star_signs')
    table.string('horoscope_1')
    table.string('horoscope_2')
  })

};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('horoscopes')
};
