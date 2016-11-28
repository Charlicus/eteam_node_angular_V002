const Mongoose = require('mongoose');
const Bcrypt = require('bcrypt-nodejs');

const userSchema = new Mongoose.Schema({
    email: { type: String, unique: true },
    password: String,
    username: String
}, {timestamps: true});

/**
 * Password hash middleware.
 */
userSchema.pre('save', function (next) {
  const user = this;
  if (!user.isModified('password')) { return next(); }
  Bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err); }
    Bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) { return next(err); }
      user.password = hash;
      next();
    });
  });
});


/**
 * Helper method for validating user's password.
 */
userSchema.methods.comparePassword = function (candidatePassword, cb) {
  Bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};


const User = Mongoose.model('User',userSchema);

module.exports = User;

