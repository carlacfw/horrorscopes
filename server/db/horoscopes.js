const getHoroscopes = (db) => {
  return db('horoscopes')
    .select('*')
}

const getHoroscopeForSign = (db, sign) => {
  console.log(sign);
  return db('horoscopes')
  .where("horoscopes.star_signs", sign)
}



module.exports = {
  getHoroscopes,
  getHoroscopeForSign
}
