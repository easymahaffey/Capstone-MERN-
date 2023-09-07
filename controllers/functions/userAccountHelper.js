const Member = require("../../db/models/Member");
const bcrypt = require("bcryptjs");

module.exports = {
  deleteMember: (req, res) => {
    let { id } = req.body;
    Member.findByIdAndRemove(
      { _id: id },
      { new: true },
      (err, data) => {
        if (err) {
          console.log(err);
          if (err) {
            let errorMessage =
              "This profile does not exist.";
            res.json({ message: errorMessage });
          };
        };
        let deleteMessage = "The profile is deleted.";
        res.json({message: deleteMessage});
      }
    );
  },
  updateMemberProfile: (req, res) => {
    let reqBody = req.body;
    let {
      id,
      firstName,
      lastName,
      date_member_joined,
      time_as_member,
      email,
      address1,
      address2,
      city,
      State,
      zipCode,
      privacy,
      date_of_birth,
      membership_status,
      membership_role,
    } = reqBody;
    const newData = {};
    Object.entries(reqBody)
      .filter(([, value]) => value !== "")
      .forEach(([key, value]) => (newData[key] = value));
    Member.findByIdAndUpdate(
      { _id: id },
      { $set: newData },
      { new: true },
      (err, data) => {
        if (err) {
          console.log(err);
        }
        let isAuthorized = data.isAuthorized
        res.json({isAuth: isAuthorized, data: data})
      }
    );
  },
  updateMemberPassword: (req, res) => {
    let { email, password1, password2 } = req.body;
    if (password1 === password2) {
      Member.findOne({ email }, async (err, data) => {
        if (err) {
          console.log(err);
        }
        if (data) {
          let password = password1;
          let salt = await bcrypt.genSalt(10);
          let hashedPassword = await bcrypt.hash(password, salt);
          password = hashedPassword;
          let id = data.id;
          Member.findByIdAndUpdate(
            { _id: id },
            { $set: { password: password } },
            { new: true },
            (err, data) => {
              if (err) {
                console.log(err);
              }
              let passwordMessage = "Password changed successfully."
              res.json( { message: passwordMessage, data: data });
            }
          );
        };
      });
    } else {
      let passwordMessage = "The passwords do not match each other";
      res.json( { message: passwordMessage });
    };
  },
};
