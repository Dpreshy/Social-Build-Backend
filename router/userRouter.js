const express = require("express");
const {  createUser,
	verifiedUser,
	getUsers,
	getUser,
	deleteUser,
	updateUser,
	signinUser,
	forgetPassword,
	resetPassword,}  = require('../controller/userController')
const upload= require ("../utils/multer")

const router = express.Router();

router.route("/register").post(upload, createUser);
router.route("/").get(getUser);

router.route("/:id").get(getUsers).patch(upload, updateUser).delete(deleteUser);


router.route("/token/:id/:token").get(verifiedUser);
router.route("/signin").post(signinUser);
router.route("/resetPassword").post(forgetPassword);
router.route("/reset/:id/:token").patch(resetPassword);

module.exports = router;
