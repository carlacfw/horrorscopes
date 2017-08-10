var test = require('ava')
var request = require('supertest')

var createServer = require('../../server/server')
var usersDb = require('../../server/db/users')
var setupDb = require('./setup-db')

setupDb(test,createServer)

test.cb('GET /', t => {
  request(t.context.app)
    .get('/api/users')
    .expect(200)
    .end((err,res) => {
      if (err) console.log(err);
      t.is(res.body.length, 3)
      t.end()
    })
})

test.cb('read users db', t => {
  usersDb.getUsers(t.context.db)
    .then(greetings => {
      t.is(greetings.length, 3)
      t.true(greetings[0].hasOwnProperty('text'))
      t.end()
    })
})

test.cb('POST /form', t => {
usersDb.getUsers(t.context.db)
    .post('api/users')
    .send({name: 'bob3'})
    .end((err, res) => {
      t.is(res.body.name, 'bob3')
      t.end()
    })
})
