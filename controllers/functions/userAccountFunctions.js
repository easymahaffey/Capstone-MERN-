const userAccountHelpers = require("./userAccountHelper");

module.exports = {
  updateMemberProfileSettings: function (req, res) {
    userAccountHelpers.updateMemberProfile(req, res);
  },
  updateMemberPassword: function (req, res) {
    userAccountHelpers.updateMemberPassword(req, res);
  },
  deleteMember: function (req, res) {
    userAccountHelpers.deleteMember(req, res);
  },
}