var express = require('express')
var router = express.Router()

var horoscopesDb = require('../db/horoscopes')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  horoscopesDb.getHoroscopes(db)
    .then(horoscopes => {
      res.json(horoscopes)
    })
})

router.get("/:sign", (req, res) => {
  let db = req.app.get('db')
  horoscopesDb.getHoroscopeForSign(db, req.params.sign)
    .then(horoscope => {
      res.json(horoscope)
    })
})


module.exports = router
