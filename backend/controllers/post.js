const express = require('express')
const router = express.Router()
const Post = require('../models/post-schema.js')


router.get('/', (req, res) => {
    Post.find({
        $or: [
            { Archived: "false" },
            { Archived: { $exists: false }}
        ]})
        .then(posts => {
            res.render('index.ejs', {posts: posts})
        })
})

router.get('/search/category', (req, res) => {
    res.redirect('/posts')
})

router.get('/liked/search/category', (req, res) => {
    res.redirect('/posts/liked')
})

router.get('/archive/search/category', (req, res) => {
    res.redirect('/posts/archive')
})
router.get('/create', (req, res) => {
    res.render('new')
})

router.get('/archive', (req, res) => {
    Post.find({Archived: "true"})
        .then(posts=> {
            res.render('archive', {posts: posts})
        })
        
})
router.get('/liked', (req, res) => {
    Post.find({Like: "true"})
        .then(posts => {
            res.render('liked', { posts: posts })
        })

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

router.get('/archive/:id/edit', (req, res) => {
    Post.findOne({ _id: req.params.id })
        .then(post => {
            res.render('editArchive', { post })
        })

})

router.get('/liked/:id/edit', (req, res) => {
    Post.findOne({ _id: req.params.id })
        .then(post => {
            res.render('editLike', { post })
        })

})

router.post('/', (req, res) => {
    Post.create(req.body)
        .then(post => {
                (setTimeout(() => { res.redirect('/posts') }, 3000))
        })
        .catch(console.error)
})
//REGULAR SEARCH
router.get('/search/category/:value', (req, res) => {
    
    let inputValue = String(req.params.value)
    val = inputValue.replaceAll("+", " ")
    console.log(val)
    Post.find(
        { $and: [
            {$or: [
            { Song: {"$regex": val, "$options": "i" } }, 
            { Artist: {"$regex": val, "$options": "i" } },
            { Album: {"$regex": val, "$options": "i" } },
            { Genre: {"$regex": val, "$options": "i" } }, 
            ]
            }, { $or: [{ Archived: "false" }, { Archived: { $exists: false}}]}]})
        .then(posts => {
            res.render('search.ejs', { posts: posts })
        })

})
router.get('/search/:category/:value', (req, res) => {
    let inputKey = String(req.params.category).charAt(0).toUpperCase() + String(req.params.category).slice(1)
    let inputValue = String(req.params.value)
    val = inputValue.replaceAll("+", " ")
    console.log(val)
    Post.find( {
        $and: [
            {[inputKey]: { "$regex": val, "$options": "i" }},
            {$or:
                [
                    {Archived: "false"},
                    {Archived: {$exists: false}}
                ]
            }]})
        .then(posts => {
            res.render('search.ejs', { posts: posts })
        })

})
//ARCHIVE SEARCH
router.get('/archive/search/category/:value', (req, res) => {
    let inputValue = String(req.params.value)
    val = inputValue.replaceAll("+", " ")
    console.log(val)
    Post.find(
        {
        $and: [
            {$or: 
                [
                    { Song: { "$regex": val, "$options": "i" } },
                    { Artist: { "$regex": val, "$options": "i" } },
                    { Album: { "$regex": val, "$options": "i" } },
                    { Genre: { "$regex": val, "$options": "i" } },
                ]
            },
            {Archived: "true"}]
        })
        .then(posts => {
            res.render('searchArchive.ejs', { posts: posts })
        })

})

router.get('/archive/search/:category/:value', (req, res) => {
    let inputKey = String(req.params.category).charAt(0).toUpperCase() + String(req.params.category).slice(1)
    let inputValue = String(req.params.value)
    val = inputValue.replaceAll("+", " ")
    console.log(inputKey)
    console.log(val)
    Post.find({ $and: [{[inputKey]: { "$regex": val, "$options": "i" }}, {Archived: "true"} ]})
        .then(posts => {
            res.render('searchArchive.ejs', { posts: posts })
            // res.send("working")
        })

})
//LIKED SEARCH
router.get('/liked/search/category/:value', (req, res) => {
    let inputValue = String(req.params.value)
    val = inputValue.replaceAll("+", " ")
    console.log(val)
    Post.find(
        { $and: [
            {$or: [
                { Song: { "$regex": val, "$options": "i" } },
                { Artist: { "$regex": val, "$options": "i" } },
                { Album: { "$regex": val, "$options": "i" } },
                { Genre: { "$regex": val, "$options": "i" } },
            ]},
            {Like: "true"}]
        })
        .then(posts => {
            res.render('searchLike.ejs', { posts: posts })
        })

})

router.get('/liked/search/:category/:value', (req, res) => {
    let inputKey = String(req.params.category).charAt(0).toUpperCase() + String(req.params.category).slice(1)
    let inputValue = String(req.params.value)
    val = inputValue.replaceAll("+", " ")
    console.log(val)
    Post.find({ [inputKey]: { "$regex": val, "$options": "i" }, Like: "true" })
        .then(posts => {
            res.render('searchLike.ejs', { posts: posts })
        })

})

router.put('/archive/:id/', (req, res) => {
    Post.findOneAndUpdate({_id: req.params.id},req.body
    , { new: true })
        .then(setTimeout(() => {res.redirect('/posts/archive')}, 3000))
        .catch(console.error)
})

router.put('/liked/:id/', (req, res) => {
    Post.findOneAndUpdate({ _id: req.params.id }, req.body
        , { new: true })
        .then(setTimeout(() => { res.redirect('/posts/liked') }, 3000))
        .catch(console.error)
})

router.put('/:id/', (req, res) => {
    Post.findOneAndUpdate({ _id: req.params.id }, req.body
        , { new: true })
        .then(setTimeout(() => { res.redirect('/posts') }, 3000))

        .catch(console.error)
})

router.delete('/:id/', (req,res)=> {
    Post.findByIdAndDelete({_id: req.params.id})
        .then(()=> res.redirect('/posts'))

    .catch(console.error)
})


module.exports = router