if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const listingsRouter = require("./Routes/listings.js");
const reviewsRouter = require("./Routes/reviews.js");
const usersRouter = require("./Routes/user.js");
const searchRouter = require("./Routes/search.js");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const localStrat = require("passport-local");
const User = require("./models/user.js");

const dbURL = process.env.ATLAS_DB_URL;

const store = MongoStore.create({
  mongoUrl: dbURL,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

store.on("error", (err) => {
  console.log("ERROR IN ATLAS SESSION STORE", err);
});

const sessionOptions = {
  store: store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

// const MONGO_URL = "mongodb://127.0.0.1:27017/skyward";

delete mongoose.connection.models["Listing"];

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbURL);
}

app.set("view engine", "ejs");
const port = 8080;
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrat(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;

  next();
});

app.get("/", (req, res) => {
  res.redirect("/listings");
});
//Listings Routes
app.use("/listings", listingsRouter);

//Reviews Routes
app.use("/listings/:id/reviews", reviewsRouter);

//User Router
app.use("/", usersRouter);

//search route
app.use("/search", searchRouter);

app.get("/privacy", (req, res) => {
  res.render("others/privacy.ejs");
});

app.get("/terms", (req, res) => {
  res.render("others/term.ejs");
});

app.all(/.*/, (req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
  let { statusCode, message } = err;
  if (!statusCode) {
    statusCode = 500;
  }
  console.log(statusCode, message);
  res.status(statusCode).render("error.ejs", { message });
});

app.listen(port, () => {
  console.log("server is running on : http://localhost:8080/listings");
});
