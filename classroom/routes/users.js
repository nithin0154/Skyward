const express = require("express");
const router = express.Router();

//Index
router.get("/", (req, res) => {
  res.render("index.ejs");
  console.log(req.cookies);
});

//Show
router.get("/:id", (req, res) => {
  res.send(`Get of user id`);
});

//post
router.post("/", (req, res) => {
  res.send(`Post of users`);
});

//Delete
router.delete("/:id", (req, res) => {
  res.send(`delete of user id`);
});

module.exports = router;
