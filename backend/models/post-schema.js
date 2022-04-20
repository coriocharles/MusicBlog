const mongoose = require('../db/connection')


const postSchema = new mongoose.Schema(
    {
        Song: { type: String, required: true },
        Rating: { type: String },
        Author: {type: String},
        Review: {type: String},
        artist: { type: String },
        Genre: [String]

    },
    { timestamps: true }
)

const Post = mongoose.model("Post", postSchema);
module.exports = Post