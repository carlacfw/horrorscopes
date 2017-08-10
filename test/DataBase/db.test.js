var test = require('ava')
var request = require('supertest')

var createServer = require('../../server/server')
var usersDb = require('../../server/db/users')
var setupDb = require('../server/setup-db')

setupDb(test,createServer)

test.cb('read users db', t => {
  usersDb.getUsers(t.context.db)
    .then(users => {
      t.is(users.length, 3)
      t.true(users[0].hasOwnProperty('name'))
      t.end()
    })
})
