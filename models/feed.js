const Mongoose = require('mongoose');

const feedSchema = new Mongoose.Schema({
    creator: Number,
    msg: String,
    comments: [
        {
            creator: Number,
            msg: String
        }
    ]
}, {timeStamp: true});

const Feed = Mongoose.model('Feed',feedSchema);

module.exports = Feed;