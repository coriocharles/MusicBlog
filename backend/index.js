require('dotenv').config()
const express = require('express')
const cors = require('cors')
const ejsLayouts = require("express-ejs-layouts")
const methodOverride = require('method-override');

const app = express()
const ejs = require('ejs')

const postController = require('./controllers/post.js');

app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(ejsLayouts)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/posts', postController);
app.set('view engine', 'ejs')
// app.use(session({
//     secret: 'SECRET KEY',
//     resave: false,
//     saveUninitialized: true,
//     store: MongoStore.create({
//         mongoUrl: 'mongodb+srv://corioc:hello123@cluster0.fetym.mongodb.net/Project2?retryWrites=true&w=majority', //YOUR MONGODB URL
//         ttl: 14 * 24 * 60 * 60,
//         autoRemove: 'native'
//     })
// }))

// app.get('/', (req, res) => {
//     req.session.user = {
//         uuid: '12234-2345-2323423'
//     }
//     req.session.save(err => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.send(req.session.user)
//         }
//     });
// })

app.get('/', (req,res)=> {
    res.render('home.ejs')
})

app.listen(process.env.PORT || 4000, () => {
    console.log("app is listening")
})