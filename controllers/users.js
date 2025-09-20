const User = require("../models/user");

module.exports.renderSignUpForm = async (req, res, next) => {
  await res.render("users/signup.ejs");
};

module.exports.createUser = async (req, res, next) => {
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
};

module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};

module.exports.loginUser = async (req, res) => {
  req.flash("success", "Welcome to SkyWard");
  let redirectURL = res.locals.redirectURL || "/listings";
  res.redirect(redirectURL);
};

module.exports.logoutUser = async (req, res) => {
  req.logout((err) => {
    if (err) {
      next(err);
    }
    req.flash("success", "Logged out Successfully");
    res.redirect("/listings");
  });
};
