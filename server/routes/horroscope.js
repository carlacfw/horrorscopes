var express = require('express')
var router = express.Router()

var usersDb = require('../db/users')

router.get('/horrorscope', (req, res) => {
  let db = req.app.get('db')
  usersDb.getHorrorscope(db)
    .then(users => {
      res.json(users)
      console.log(users);
    })
})

module.exports = router
