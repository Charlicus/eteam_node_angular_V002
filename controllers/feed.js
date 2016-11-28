const Feed = require('../models/feed');

exports.create = (req, res, next) => {
    req.assert('msg','Message shoult not be empty').len(1);
    req.sanitize('msg').escape();

    const errors = req.validationErrors();
    
    if(errors){
        return res.status(400).send(errors);
    }

    const feed = new Feed(req.body);
    feed._creator = req.user._id;
    feed.save((err,savedFeed) => {
        if(err){return res.status(500).send(err);}
        return res.status(200).send(savedFeed);
    }); 
}


exports.read = (req, res, next) => {
    Feed.find({}).sort({updatedAt: 'desc'}).populate('_creator').populate('comments._creator').exec((err,feeds)=>{
        if(err){return res.status(500).send(err)}
        return res.status(200).send(feeds);
    });
}

exports.createComment = (req, res, next) => {
    req.assert('msg','Comment should not be empty').len(1);
    req.sanitize('msg').escape();

    const errors = req.validationErrors();
    
    if(errors){
        return res.status(400).send(errors);
    }
    Feed.findById(req.body._feedId,(err,feed)=> {
        if(err || !feed){return res.status(500).send(err)}
        feed.comments = feed.comments || [];
        feed.comments.push({msg: req.body.msg, _creator: req.user._id, createdAt: Date.now(), updatedAt: Date.now()})
        feed.save((err,savedFeed)=>{
            if(err){return res.status(500).send(err)}
            return res.status(200).send(savedFeed);
        });
    });
}