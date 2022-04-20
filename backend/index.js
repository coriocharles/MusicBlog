require('dotenv').config()
const express = require('express')

const cors = require('cors')
const ejsLayouts = require("express-ejs-layouts")
const methodOverride = require('method-override');

const app = express()
const postController = require('./controllers/post.js');

app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use('/posts', postController);

app.get('/', (req,res)=> {
    res.render('home')
})
app.listen(4000, () => {
    console.log("app is listening")
})