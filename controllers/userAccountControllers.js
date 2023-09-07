const userAccountFunctions = require('./functions/userAccountFunctions');

module.exports = {
  updateMemberProfileSettings: userAccountFunctions.updateMemberProfileSettings,
  updateMemberPassword: userAccountFunctions.updateMemberPassword,
  deleteMember: userAccountFunctions.deleteMember,
}