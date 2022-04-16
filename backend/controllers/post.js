const express = require('express')
const router = express.Router()
const Post = require('../models/post-schema.js')

router.get('/', (req, res) => {
    res.send("working for posts")
})


router.get('/all', (req, res) => {
    Post.find({})
        .then(posts => {
            res.json(posts)
        })
})


module.exports = router