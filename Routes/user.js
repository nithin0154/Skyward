const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { redirectURL } = require("../middleware.js");
const userController = require("../controllers/users.js");

router
  .route("/signup")
  .get(wrapAsync(userController.renderSignUpForm))
  .post(userController.createUser);

router
  .route("/login")
  .get(userController.renderLoginForm)
  .post(
    redirectURL,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.loginUser
  );

router.get("/logout", userController.logoutUser);

module.exports = router;
