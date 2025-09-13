const express = require("express");
const router = express.Router();

//Index
router.get("/", (req, res) => {
  res.send(`Get of posts`);
});

//Show
router.get("/:id", (req, res) => {
  res.send(`Get of post id`);
});

//post
router.post("/", (req, res) => {
  res.send(`Post of posts`);
});

//Delete
router.delete("/:id", (req, res) => {
  res.send(`delete of posts`);
});

module.exports = router;
