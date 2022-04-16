const Post = require('../models/post-schema')
const seedData = require('./post.json')

Post.deleteMany({})
    .then(() =>
        Post.insertMany(seedData)
    )
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit();
    });