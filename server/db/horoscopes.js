const getHoroscopes = (db) => {
  return db('horoscopes')
    .select('*')
}

const getHoroscopeForSign = (db, sign) => {
  return db('horoscopes')
  .where("horoscopes.star_signs", sign)
}

const getStarSigns = (db) => {
  return db('horoscopes')
    .select('id','star_signs')
}


module.exports = {
  getHoroscopes,
  getHoroscopeForSign,
  getStarSigns
}
