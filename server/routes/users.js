var express = require('express')
var router = express.Router()

var usersDb = require('../db/users')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  usersDb.getUsers(db)
    .then(users => {
      res.json(users)
    })
})

router.post('/', (req, res) => {
  let db = req.app.get('db')
  usersDb.addUser(db, req.body)
    .then((user_id) => {
      usersDb.getUserById(db, user_id[0])
        .then(user => {
          res.status(201).json(user)
        })
    })
    .catch(err => res.status(500).send(err.message))
})

module.exports = router
