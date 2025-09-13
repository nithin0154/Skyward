const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const { reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");

let validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(", ");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

router.post(
  "/",
  validateReview,
  wrapAsync(async (req, res, next) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    console.log(`Review Added Succesfully`);
    res.redirect(`/listings/${listing._id}`);
  })
);

router.delete("/:rid", async (req, res, next) => {
  let { id, rid } = req.params;
  await Review.findByIdAndDelete(rid);
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: rid } });
  res.redirect(`/listings/${id}`);
});

module.exports = router;
