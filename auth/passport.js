const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

// Load Member Model
const Member = require("../db/models/Member");

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      (email, password, done) => {
        // Match Member
        Member.findOne({ email: email })
          .then((user) => {
            if (!user) {
              return done(null, false, {
                message: "That Email Is Not Registered",
              });
            }

            // Match password
            bcrypt.compare(password, user.password, (err, isMatch) => {
              if (err) throw err;

              if (isMatch) {
                return done(null, user);
              } else {
                return done(null, false, {
                  message: "The Password You Entered Is Incorrect",
                });
              }
            });
          })
          .catch((err) => console.log(err));
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    Member.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
