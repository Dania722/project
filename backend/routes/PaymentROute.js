const express = require("express");
const { Payment, sendStripeApiKey } = require("../Controller/paymentController");
const router = express.Router();
const {isAuthenticatedUser} = require("../middleware/authentication");

router.route("/payment/process").post(isAuthenticatedUser, Payment);

router.route("/stripeapikey").get(isAuthenticatedUser, sendStripeApiKey);


module.exports = router;