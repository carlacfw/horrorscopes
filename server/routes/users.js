var express = require('express')
var router = express.Router()

var usersDb = require('../db/users')

router.get('/users', (req, res) => {
  let db = req.app.get('db')
  usersDb.getUsers(db)
    .then(users => {
      res.json(users)
    })
})

router.post('/users', (req, res) => {
  let db = req.app.get('db')
  usersDb.
})

module.exports = router
