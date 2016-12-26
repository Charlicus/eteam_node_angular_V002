const Team = require('../models/team');

exports.create = (req, res, next) => {
    req.assert('name','Team\'s name must be at least 4 characters long').len(4);
    req.assert('sport','Sport should not be blank').notEmpty();
    req.assert('name','Name should be alphanumeric').isAlphanumeric();
    req.sanitize('sport').escape();
    req.sanitize('name').trim();

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
    Team.find({}).populate('_creator','-password').exec((err,teams)=>{
        if(err){return res.status(500).send(err)}
        return res.status(200).send(teams);
    });
}