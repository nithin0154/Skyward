const express = require("express");
const app = express();
const posts = require("./routes/posts");
const users = require("./routes/users");
const cookieParser = require("cookie-parser");
const ejs = require("ejs-mate");
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");

app.use(
  session({
    secret: "mysupersecretstring",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());
app.engine("ejs", ejs);
app.set("view engine", "ejs");
app.set(path.join("views", __dirname, "views"));
app.use(cookieParser("secret"));

app.use((req, res, next) => {
  res.locals.successMsg = req.flash("success");
  res.locals.errorMsg = req.flash("error");
  next();
});

app.get("", (req, res) => {
  res.send(`Welcome to the root`);
});

app.get("/register", (req, res) => {
  let { name = "anonymous" } = req.query;
  req.session.name = name;
  if (name === "anonymous") {
    req.flash("error", "User not registered!");
  } else {
    req.flash("success", "User registered Successfully!");
  }
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  res.render("index.ejs", {
    name: req.session.name,
  });
});

// app.get("/reqcount", (req, res) => {
//   if (req.session.count) {
//     req.session.count++;
//   } else {
//     req.session.count = 1;
//   }
//   res.send(`<html><h1>You sent request ${req.session.count} times</h1></html>`);
// });

app.get("/test", (req, res) => {
  res.send("This is a test page !");
});

//Greet route
app.get("/greet", (req, res) => {
  let { name = "Anonymous" } = req.cookies;
  res.send(`${req.cookies.greet},${name}`);
});

//GET signed Cookie
app.get("/getsignedcookie", (req, res) => {
  res.cookie("Made-in", "India", { signed: true });
  res.send("Signed cookie sent !");
});

app.get("/verify", (req, res) => {
  console.log(req.signedCookies);

  res.send(`verfied`);
});

app.get("/getcookies", (req, res) => {
  res.cookie("greet", "Hello");
  res.cookie("Hello", "Good Morning");
  res.send(`The cookies attached are recieved thru this request`);
});

app.use("/users", users);
app.use("/posts", posts);

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
