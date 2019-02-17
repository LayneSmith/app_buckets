const mongoose = require('mongoose');
const Schema = mongoos.Schema;

//  Create Schema
const TeamSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String
    },
    coach: {
        type: String
    },
    location: {
        type: String
    },
    level: {
        type: String
    },
    wins: {
        type: Number
    },
    losses: {
        type: Number
    },
    players: [
        {
            id: {
                type: String,
                required: true
            },
            firstname: {
                type: String,
                required: true
            },
            lastname: {
                type: String,
                required: true
            },
            number: {
                type: String
            }
        }
    ],
    clublink: {
        type: String
    },
    games: {
        type: [String] // Array of gameIDs?
    }
});

module.exports = Profile = mongoose.model('team', TeamSchema);
