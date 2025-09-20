const Review = require("../models/review.js");
const Listing = require("../models/listing.js");


module.exports.newReviewCreation = async (req, res, next) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user;
    console.log(newReview);
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success", "New Review added!");
    res.redirect(`/listings/${listing._id}`);
  }

  module.exports.destroyReview = async (req, res, next) => {
    let { id, rid } = req.params;
    await Review.findByIdAndDelete(rid);
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: rid } });
    req.flash("success", "Review deleted!");
    res.redirect(`/listings/${id}`);
  };