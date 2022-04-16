const express = require('express')
const router = express.Router()
const Artist = require('../models/artist-schema.js')

router.get('/', (req,res)=> {
    res.send("working for artists")
})


router.get('/all', (req,res)=> {
    Artist.find({})
        .then(artists => {
            res.json(artists)
        })
})

module.exports = router