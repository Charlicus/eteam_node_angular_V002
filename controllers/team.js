const Team = require('../models/team');

exports.create = (req, res, next) => {
    req.sanitize('name').trim();
    req.assert('name','Team\'s name must be between 4 and 15 characters').len(4,15);
    req.assert('name','Team\'s name should be alphanumeric').isAlphanumeric();
    req.assert('sport','Sport should not be blank').notEmpty();
    req.sanitize('sport').escape();


    const errors = req.validationErrors();

    if(errors){
        return res.status(400).send(errors);
    }

    const team = new Team(req.body);
    team.url = team.name.toLowerCase();
    Team.findOne({name: team.name}, (err, existingTeam)=> {
      if(err){return res.status(500).send(err); }
      if(existingTeam){return res.status(400).send([{msg:'This team name is already taken'}]);}
      team._creator = req.user._id;
      team.save((err, savedTeam)=>{
        if(err){ return res.status(500).send(err);}
        return res.status(200).send(savedTeam);
      });
    });
}

// to be replaced , does make sense to query all teams..., read should be for one team at a time
exports.readAll = (req, res, next) => {
    Team.find({}).populate('_creator','-password -email').exec((err,teams)=>{
        if(err){return res.status(500).send(err)}
        return res.status(200).send(teams);
    });
}

exports.read = (req, res, next) => {
    Team.findOne({url: req.params.name}).populate('_creator','-password -email').exec((err,team)=>{
        if(err){return res.status(500).send(err)}
        if(!team){return res.status(400).send([{msg:'This team doesn\'t exist...'}]);}
        return res.status(200).send(team);
    });
}

