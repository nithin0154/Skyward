const express = require("express");
const app = express();
const posts = require("./routes/posts");
const users = require("./routes/users");
const cookieParser = require("cookie-parser");

app.use(cookieParser("secret"));

app.get("", (req, res) => {
  res.send(`Welcome to the root`);
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
