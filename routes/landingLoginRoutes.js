const router = require("express").Router();
const landingLayout = require("../controllers/landingLoginControllers");

router
  .route("/registerMember")
  .post(landingLayout.registerMember);

router
  .route("/loginMember")
  .post(landingLayout.loginMember);

module.exports = router;
