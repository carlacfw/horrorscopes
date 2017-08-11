var express = require('express')
var router = express.Router()

var horoscopesDb = require('../db/horoscopes')

router.get('/starSigns', (req, res) => {
  let db = req.app.get('db')
  horoscopesDb.getStarSigns(db)
  .then(starSigns => {
    console.log(starSigns)
    res.json(starSigns)
  })
})
router.get("/:id", (req, res) => {
  let db = req.app.get('db')
  horoscopesDb.getHoroscopeForUser(db, req.params.id)
  .then(userHoroscope => {
    res.json(userHoroscope)
  })
})

router.get("/sign/:sign", (req, res) => {
  let db = req.app.get('db')
  horoscopesDb.getHoroscopeForSign(db, req.params.sign)
    .then(horoscope => {
      res.json(horoscope)
    })
})

router.get('/', (req, res) => {
  let db = req.app.get('db')
  horoscopesDb.getHoroscopes(db)
  .then(horoscopes => {
    res.json(horoscopes)
  })
})


module.exports = router
