const express = require('express')
const router = express.Router()
const Post = require('../models/post-schema.js')


router.get('/', (req, res) => {
    Post.find({})
        .then(posts => {
            res.render('index.ejs', {posts: posts})
        })
   
})

router.get('/create', (req, res) => {
    res.render('new')
})

router.get('/:id', (req, res) => {
    Post.find({_id: req.params.id})
        .then(post => {
            res.json(post)
        })
})

router.get('/:id/edit', (req,res)=> {
    Post.findOne({_id: req.params.id})
        .then(post => {res.render('edit', {post})
        })

})

router.get('/search/:value', (req, res) => {
    Post.find({ "Song": { "$regex": req.params.value, "$options": "i" } })
        .then(posts => {
            res.render('search', {posts})
        })

})

router.post('/', (req, res) => {
    // res.send('received!')
    console.log('in post')
    Post.create(req.body)
        .then(post => {
            res.redirect('/posts')
        })
        .catch(console.error)
})

router.put('/:id/', (req, res) => {
    Post.findOneAndUpdate({ _id: req.params.id}, {Song: req.body.Song, Rating: req.body.Rating, Author: req.body.Author, Review: req.body.Review}
    , { new: true })
        .then(res.redirect('/posts'))
        
        .catch(console.error)
})

router.delete('/:id/', (req,res)=> {
    Post.findByIdAndDelete({_id: req.params.id})
        .then(()=> res.redirect('/posts'))

    .catch(console.error)
})


module.exports = router