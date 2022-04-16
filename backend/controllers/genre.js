const express = require('express')
const router = express.Router()
const Genre = require('../models/genre-schema.js')

router.get('/', (req, res) => {
    res.send("working for genres")
})




router.get('/all', (req, res) => {
    Genre.find({})
        .then(genres => {
            res.json(genres)
        })
})



module.exports = router