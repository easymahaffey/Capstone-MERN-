const Member = require("../../db/models/Member");
const bcrypt = require("bcryptjs");
const passport = require("passport");

module.exports = {
  loginMember: (req, res, next) => {
    passport.authenticate("local", function (err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.redirect("/");
      }
      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }
        return res.json(user);
      });
    })(req, res, next);
  },
  registerMember: (req, res) => {
    let {
      firstName,
      lastName,
      email,
      password1,
      password2,
      address1,
      address2,
      city,
      State,
      zipCode,
      privacy,
      membership_status,
      membership_role,
    } = req.body;
    if (password1 === password2) {
      Member.findOne({ email }, async (err, data) => {
        if (err) {
          console.log(err);
        }
        if (data) {
          let passwordMessage =
            "This member's email is already registered in our database. Please log in or re-register.";
          let loggedIn = false;
          let isAuthorized = false;
          res.json({ passwordMessage, isAuthorized, loggedIn });
        } else {
          let password = password1;
          let salt = await bcrypt.genSalt(10);
          let hashedPassword = await bcrypt.hash(password, salt);
          password = hashedPassword;
          let loggedIn = true;
          let isAuthorized = true;
          let member = new Member({
            firstName,
            lastName,
            email,
            password,
            loggedIn,
            isAuthorized,
            address1,
            address2,
            city,
            State,
            zipCode,
            privacy,
            membership_status,
            membership_role,
          });
          member.save((err, data) => {
            if (err) {
              console.log("MEMBER SAVE ERR", err);
            }
            res.json(data);
          });
        };
      });
    } else {
      let passwordMessage = "The passwords do not match each other";
      let loggedIn = false;
      res.render("register", { passwordMessage, loggedIn });
    };
  },
};
