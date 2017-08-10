const getHoroscopes = (db) => {
  return db('horoscopes')
    .select('*')
}

module.exports = {
  getHoroscopes
}
