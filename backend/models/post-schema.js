const mongoose = require('../db/connection')
const Artist = require('./artist-schema')
const Genre = require('./genre-schema')
ArtistSchema = mongoose.model('Artist').schema,
    Schema = mongoose.Schema;

GenreSchema = mongoose.model('Genre').schema,
    Schema = mongoose.Schema;

const postSchema = new mongoose.Schema(
    {
        Song: { type: String, required: true },
        Rating: { type: String },
        Author: {type: String},
        Review: {type: String},
        artist: ArtistSchema,
        Genre: GenreSchema

    },
    { timestamps: true }
)

const Post = mongoose.model("Post", postSchema);
module.exports = Post