const Genre = require('../models/genre-schema')
const seedData = require('./genre.json')

Genre.deleteMany({})
    .then(() =>
        Genre.insertMany(seedData)
    )
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit();
    });