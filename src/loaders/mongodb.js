const mongoose = require('mongoose');

async function startDB() {
    await mongoose.connect('mongodb+srv://viniciusarantes:jnu9MdES63DwKSQ9@clusterproj.k66brpl.mongodb.net/');
}

module.exports = startDB;