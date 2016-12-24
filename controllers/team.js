const Team = require('../models/team');

exports.create = (req, res, next) => {
    req.assert('name','Name must be at least 4 characters long').len(4);
    req.assert('name','Team\'s name should only contain letters').isAlpha();
    req.assert('sport','Sport should not be empty').len(1);
    req.assert('sport','Sport\'s name should only contain letters').isAlpha();

    const errors = req.validationErrors();

    if(errors){
        return res.status(400).send(errors);
    }

    const team = new Team(req.body);
    team._creator = req.user._id;
    team.save((err, savedTeam)=>{
        if(err){ return res.status(500).send(err);}
        return res.status(200).send(savedTeam);
    });
}

exports.read = (req, res, next) => {
    Team.find({}).populate('_creator').exec((err,teams)=>{
        if(err){return res.status(500).send(err)}
        return res.status(200).send(teams);
    });
}