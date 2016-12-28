const Team = require('../models/team');
const Member = require('../models/member');

exports.create = (req, res, next) => {
    req.sanitize('team.name').trim();
    req.assert('team.name','Team\'s name must be between 4 and 15 characters').len(4,15);
    req.assert('team.name','Team\'s name should be alphanumeric').isAlphanumeric();
    req.assert('team.sport','Sport should not be blank').notEmpty();
    req.sanitize('team.sport').escape();
    req.assert('member.role','Your role should not be blank').notEmpty();
    req.sanitize('member.role').escape();


    const errors = req.validationErrors();

    if(errors){
        return res.status(400).send(errors);
    }

    let team = new Team({name: req.body.team.name, sport: req.body.team.sport,_creator: req.user._id, url: req.body.team.name.toLowerCase()});
    Team.findOne({name: team.name}, (err, existingTeam)=> {
      if(err){return res.status(500).send(err); }
      if(existingTeam){return res.status(400).send([{msg:'This team name is already taken'}]);}
      team.save((err,savedTeam)=>{
        if(err){ return res.status(500).send(err);}
        member = new Member({_team: savedTeam._id,_user: req.user._id, role: req.body.member.role, admin: true});
        member.save((err,savedMember)=>{
            if(err){ return res.status(500).send(err);}
            return res.status(200).send(savedTeam);
        });
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

exports.readMembers = (req, res, next) => {
    Member.find({_team: req.params.id}).populate('_user','-password -email').exec((err,members)=>{
        if(err){return res.status(500).send(err)}
        if(!members){return res.status(400).send([{msg:'Members not found'}]);}
        return res.status(200).send(members);
    });
}

exports.read = (req, res, next) => {
    Team.findOne({url: req.params.name}).populate('_creator','-password -email').exec((err,team)=>{
        if(err){return res.status(500).send(err)}
        if(!team){return res.status(400).send([{msg:'This team doesn\'t exist...'}]);}
        return res.status(200).send(team);
    });
}

