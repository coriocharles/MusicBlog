const mongoose = require('../db/connection')

const artistSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        img: { type: String },
        profile: {type: String}

    },
    { timestamps: true }
)

const Artist = mongoose.model("Artist", artistSchema);
module.exports = Artist