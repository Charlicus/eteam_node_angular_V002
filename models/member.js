const Mongoose = require('mongoose');

const memberSchema = new Mongoose.Schema({
    _user: {type: Mongoose.Schema.Types.ObjectId, ref:'User'},
    _team: {type: Mongoose.Schema.Types.ObjectId, ref:'Team'},
    role: String

},{timestamps: true});

const Member = Mongoose.model('Member', memberSchema);

module.exports = Member;