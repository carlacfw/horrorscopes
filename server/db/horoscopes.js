const getHoroscopes = (db) => {
  return db('horoscopes')
    .select('*')
}

const getHoroscopeForSign = (db, sign) => {
  return db('horoscopes')
  .where("horoscopes.star_signs", sign)
}


const getHoroscopeForUser = (db, id) => {
  return db('users')
  .join('horoscopes', 'horoscope_id', '=', 'horoscopes.id')
  .select('users.*', 'horoscopes.*', 'users.id as user_id')
  .where('horoscope_id', id)

}

const getStarSigns = (db) => {
  return db('horoscopes')
    .select('id','star_signs')
}



module.exports = {
  getHoroscopes,
  getHoroscopeForSign,
  getHoroscopeForUser,
  getStarSigns
}
