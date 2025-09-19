const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");
const Review = require("../models/review.js");

router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(async (req, res, next) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user;
    console.log(newReview);
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success", "New Review added!");
    res.redirect(`/listings/${listing._id}`);
  })
);

router.delete("/:rid", isLoggedIn, isReviewAuthor, async (req, res, next) => {
  let { id, rid } = req.params;
  await Review.findByIdAndDelete(rid);
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: rid } });
  req.flash("success", "Review deleted!");
  res.redirect(`/listings/${id}`);
});

module.exports = router;
