const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing");

router.get("/q", async (req, res) => {
  let search = req.query.q;
  let Foundlistings = await Listing.find({ title: search });
  if (!Foundlistings.length) {
    req.flash("error", `No listings found with ${search}`);
    return res.redirect("/listings");
  }
  res.render("listings/searchshow.ejs", { Foundlistings, search });
});

router.get("/filter/:category", async (req, res) => {
  let { category } = req.params;
  let Foundlistings = await Listing.find({ category: category });
  if (!Foundlistings.length) {
    req.flash("error", `No listings found with ${category}`);
    return res.redirect("/listings");
  }
  res.render("listings/searchFilter.ejs", { Foundlistings, category });
});

module.exports = router;
