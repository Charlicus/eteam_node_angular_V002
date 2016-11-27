const Feed = require('../models/feed');

exports.create = (req, res, next) => {
    req.assert('msg','Message should contain at least 2 characters').len(2);
    req.sanitize('msg').escape();

    const errors = req.validationErrors();
    
    if(errors){
        return res.status(400).send(errors);
    }

    const feed = new Feed(req.body);
    feed.creator = req.user._id;
    feed.save((err,savedFeed) => {
        if(err){return res.status(500).send(err);}
        console.log(savedFeed);
        return res.status(200).send(savedFeed);
    }); 
}


exports.read = (req, res, next) => {
    Feed.find({}).populate('creator').exec(function(err,feeds){
        if(err){return res.status(500).send(err)}
        return res.status(200).send(feeds);
    });
}