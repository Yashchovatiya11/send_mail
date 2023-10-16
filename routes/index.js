var express = require('express');
var router = express.Router();

var user = require('../controlller/usercontroller');

router.post('/sendmail',user.sendmail);
router.post('/check_otp',user.check_OTP);

module.exports = router;
