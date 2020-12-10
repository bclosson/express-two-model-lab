const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    hometown: {
        type: String,
        required: true,
    },
    conference: String,
    division: String,

}, {timestamps: true});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
