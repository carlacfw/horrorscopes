
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('horoscopes', (table) => {
    table.increments('id')
    table.string('star_signs')
    table.string('image_url')
    table.text('horoscope_1')
    table.text('horoscope_2')
  })

};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('horoscopes')
};
