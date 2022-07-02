const express = require ("express");
const {createUser,loginUser,logoutUser ,forgotPassword } = require("../Controller/UserController");
const router = express.Router ();

router.route("/registration").post(createUser)
router.route("/login").post(loginUser)
router.route("/logout").get(logoutUser)
router.route("/password/forgot").get(forgotPassword)
module.exports = router ;