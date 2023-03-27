const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/project_nodejs', {
            useNewUrlParser: true,
            useunifiedTopology: true,
        });
        console.log('Connect DB successfully');
    } catch (error) {
        console.log('Connect DB fail');
    }
}

module.exports = { connect };
