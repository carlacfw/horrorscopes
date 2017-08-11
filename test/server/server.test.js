var test = require('ava')
var request = require('supertest')

var createServer = require('../../server/server')
var usersDb = require('../../server/db/users')
var setupDb = require('./setup-db')

setupDb(test,createServer)

test.cb('GET/v1/api/users', t => {
  request(t.context.app)
    .get('/v1/api/users')
    .expect(200)
    .end((err,res) => {
      if (err) 
      t.is(res.body.length, 3)
      t.end()
    })
})


test.cb('POST/v1/api/users', t => {
  request(t.context.app)
    .post('/v1/api/users')
    .send({name: 'bob4'})
    .end((err, res) => {
      t.is(err, null)
      t.is(res.body.name, 'bob4')
      t.end()
    })
})
