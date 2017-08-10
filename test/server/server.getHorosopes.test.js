var test = require('ava')
var request = require('supertest')

var createServer = require('../../server/server')
var usersDb = require('../../server/db/users')
var horoscopesDb = require('../../server/db/horoscopes')
var setupDb = require('./setup-db')

setupDb(test,createServer)

test.cb('testing GET /api/horoscopes & res200', t => {
  request(t.context.app)
    .get('/horoscopes')
    .expect(200)
    .end((err,res) => {
      if (err) console.log(err);
      t.is(res.body.length, 3)
      t.end()
    })
})

test.cb.only('testing GET /api/horoscopes/aries if returns correct text', t => {
  request(t.context.app)
    .get('/horoscopes/aries')
    .expect(200)
    .end((err,res) => {
      if (err) console.log(err);
      console.log(res.body)
      t.is("Aries", res.text)
      t.end()
    })
})
