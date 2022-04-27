const mongoose = require('../db/connection')

// const genreSchema = new mongoose.Schema( 
//     {
//         Genre: {type: String}
//     }
// )
const postSchema = new mongoose.Schema(
    {
        Song: { type: String, required: true },
        Rating: { type: String },
        Author: { type: String },
        Album: { type: String },
        Notes: {type: String},
        Artist: { type: String },
        Genre: [String],
        // [genreSchema],
        Platform: [String],
        Link: {type:String},
        Archived: {type: String},
        Like: {type: String}
    },
    { timestamps: true }
)


const Post = mongoose.model("Post", postSchema);
module.exports = Post