const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const User = require("../models/user.js");
const passport = require("passport");
const { redirectURL } = require("../middleware.js");

router.get(
  "/signup",
  wrapAsync(async (req, res, next) => {
    await res.render("users/signup.ejs");
  })
);

router.post("/signup", async (req, res, next) => {
  try {
    let { email, password, username } = req.body;
    const newUser = new User({ email, username });
    let registereduser = await User.register(newUser, password);
    req.login(registereduser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "Welcome to SkyWard");
      res.redirect("/listings");
    });
  } catch (error) {
    req.flash("error", error.message);
    res.redirect("/signup");
  }
});

router.get("/login", (req, res) => {
  res.render("users/login.ejs");
});
router.post(
  "/login",
  redirectURL,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  async (req, res) => {
    req.flash("success", "Welcome to SkyWard");
    let redirectURL = res.locals.redirectURL || "/listings";
    res.redirect(redirectURL);
  }
);

router.get("/logout", async (req, res) => {
  req.logout((err) => {
    if (err) {
      next(err);
    }
    req.flash("success", "Logged out Successfully");
    res.redirect("/listings");
  });
});

module.exports = router;
