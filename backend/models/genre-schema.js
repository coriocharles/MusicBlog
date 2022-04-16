const mongoose = require('../db/connection')

const genreSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        attributes: { type: String },
        keyContributors: [String]


    },
    { timestamps: true }
)

const Genre = mongoose.model("Genre", genreSchema);
module.exports = Genre