const router = require('express').Router();
const landingLayoutRoutes = require('./landingLoginRoutes');
const userAccountRoutes = require('./userAccountRoutes');

router.use('/', landingLayoutRoutes);
router.use('/', userAccountRoutes);

module.exports = router;