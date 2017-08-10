const getUsers = (db) => {
  return db('users')
    .select('*')
}

const saveUser = (db) => {
  return db('users')
    .join('')
}

module.exports = {
  getUsers
}
