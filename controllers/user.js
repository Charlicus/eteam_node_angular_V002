const User = require('../models/user');
const passport = require('passport');

exports.signup = (req, res, next) => {
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('username','Username must be between 4 and 15 characters').len(4,15)  
    req.assert('username','Username should only contain letters & numbers').isAlphanumeric();
    req.assert('password','Password must be between 6 and 15 characters').len(4,15);
    req.assert('confirmPassword', 'Passwords do not match').equals(req.body.password);
    req.sanitize('email').normalizeEmail({ remove_dots: false });
    req.sanitize('username').trim();
    
    const errors = req.validationErrors();

    if(errors){
        return res.status(400).send(errors);
    }
    const user = new User({
      email: req.body.email,
      password: req.body.password,
      username: req.body.username
    });

    User.findOne({email: user.email}, (err, existingUser)=> {
      if(err){return res.status(500).send(err); }
      if(existingUser){return res.status(400).send([{msg:'This email is already used!'}]);}
      user.save((err) => {
        if(err){return res.status(500).send(err);}
        req.login(user, (err) => {
          if(err){return res.status(500).send(err)}
          return res.status(200).send(user)
        });
      });
    });
};

exports.login = (req, res, next) => {
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('password', 'Password cannot be blank').notEmpty();
  req.sanitize('email').normalizeEmail({ remove_dots: false });

  const errors = req.validationErrors();
  if(errors){ return res.status(400).send(errors);}

  passport.authenticate('local',(err, user, info)=>{
    if(err) { return res.status(500).send(err)}
    if(!user) {return res.status(400).send(info)}
    req.login(user, (err) => {
      if(errors){return res.status(500).send(err)}
      return res.status(200).send(user);
    });
  })(req,res,next);
};

exports.logout = (req, res, next) => {
  req.logout();
  return res.status(200).send('{}');
};

exports.isAuthenticated = (req, res, next) => {
  if(req.isAuthenticated()){
    return res.status(200).send(req.user);
  }
  else{
    req.logout();
    return res.status(400).send('{}');
  }
}