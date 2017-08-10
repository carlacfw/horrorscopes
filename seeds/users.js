
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 101, name: 'Bob1', horoscope_id: 201},
        {id: 102, name: 'Bob2', horoscope_id: 202},
        {id: 103, name: 'Bob3', horoscope_id: 203}
      ]);
    });
};
