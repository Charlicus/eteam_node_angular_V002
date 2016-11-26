const Mongoose = require('mongoose');

const feedSchema = new Mongoose.Schema({
    creator: {type: Mongoose.Schema.Types.ObjectId, ref:'User'},
    msg: String,
    comments: [
        {
            creator: {type: Mongoose.Schema.Types.ObjectId, ref:'User'},
            msg: String
        }
    ]
}, {timeStamp: true});

const Feed = Mongoose.model('Feed',feedSchema);

module.exports = Feed;