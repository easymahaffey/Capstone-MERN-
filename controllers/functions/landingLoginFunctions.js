const routeHelpers = require("./landingRouteHelper");

module.exports = {
  registerMember: function (req, res) {
    routeHelpers.registerMember(req, res);
  },
  loginMember: function (req, res, next) {
    routeHelpers.loginMember(req, res, next);
  },  
};
