const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

//Define our model..like email and password

const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true }, //{} to create unique so only one email
  password: String,
});

// on save Hook, encrypt password
//before saving the model, run this function
userSchema.pre("save", function (next) {
  const user = this; //access to the user model
  // generate a salt then run callback
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }

    //hash (encrypt) our password using the salt
    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) {
        return next(err);
      }

      //overwrite plain text password with encrypted password
      user.password = hash;
      next();
    });
  });
});

//using bcrypt to compare password
userSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};
//create the model class
const ModelClass = mongoose.model("user", userSchema); // put model in user collection

//export to allow other component to use.

module.exports = ModelClass;
