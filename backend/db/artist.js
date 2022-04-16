const Artist = require('../models/artist-schema')
const seedData = require('./artist.json')

Artist.deleteMany({})
    .then(() =>
        Artist.insertMany(seedData)
    )
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit();
    });