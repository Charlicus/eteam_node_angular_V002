const Mongoose = require('mongoose');

const feedSchema = new Mongoose.Schema({
    _creator: {type: Mongoose.Schema.Types.ObjectId, ref:'User'},
    msg: String,
    comments: [
        {
            _creator: {type: Mongoose.Schema.Types.ObjectId, ref:'User'},
            msg: String
        }
    ]
}, {timestamps: true});

const Feed = Mongoose.model('Feed',feedSchema);

module.exports = Feed;