const Mongoose = require('mongoose');

const teamSchema = new Mongoose.Schema({
    _creator: {type: Mongoose.Schema.Types.ObjectId, ref:'User'},
    name: String,
    url: String,
    sport: String,

},{timestamps: true});

const Team = Mongoose.model('Team', teamSchema);

module.exports = Team;