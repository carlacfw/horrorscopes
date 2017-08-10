var express = require('express')
var router = express.Router()

var horoscopesDb = require('../db/horoscopes')

//all routes for  /v1/api/horoscopes

router.get('/', (req, res) => {
  let db = req.app.get('db')
  horoscopesDb.getHoroscopes(db)
    .then(horoscopes => {
      res.json(horoscopes)
    })
})

router.get("/starSigns", (req, res) => {
  let db = req.app.get('db')
  horoscopesDb.getStarSigns(db)
  .then(starSigns => {
    console.log(starSigns)
    res.json(starSigns)
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
