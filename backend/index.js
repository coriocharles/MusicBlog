const express = require('express')
const cors = require('cors')
const methodOverride = require('method-override');
const app = express()
app.use(cors())


const artistController = require('./controllers/artist');
app.use('/artists', artistController);
const genreController = require('./controllers/genre');
app.use('/genres', genreController);
const postController = require('./controllers/post');
app.use('/posts', postController);



app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));

app.get ('/', (req,res)=> {
    res.send('working')
})
app.listen(4000, () => {
    console.log("app is listening")
})