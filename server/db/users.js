const getUsers = (db) => {
  return db('users')
    .select('*')
}

const addUser = (db, post) => {
  return db('users').insert(post)
}

const getUserById = (db, id) => {
  return db('users')
    .where('id', id)
    .first()

}

module.exports = {
  getUsers,
  addUser,
  getUserById
}
