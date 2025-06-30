const newman = require('newman');
//require('dotenv').config();

newman.run({
    // collection:`https://api.postman.com/collections/35150579-d11e280a-a67d-452b-81f4-776ab2c688e6?access_key=${process.env.access_key}`,
    collection: require('./collection/ZooSync.postman_collection.json'), // Replace with your collection path
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlExtra: {
            export: 'Reports' // Report file path
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('Collection run complete!');
});


