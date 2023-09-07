const router = require("express").Router();
const userAccounts = require("../controllers/userAccountControllers");

router
  .route("/updateMemberProfile")
  .post(userAccounts.updateMemberProfileSettings);

router
  .route("/updateMemberPassword")
  .post(userAccounts.updateMemberPassword);

router
  .route("/deleteMember")
  .post(userAccounts.deleteMember);

module.exports = router;