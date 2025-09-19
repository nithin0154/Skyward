const ExpressError = require("./utils/ExpressError.js");
const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const { listingSchema } = require("./schema.js");
const { reviewSchema } = require("./schema.js");

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectURL = req.originalUrl;
    req.flash("error", "You must be logged in to create a listing");
    return res.redirect("/login");
  }
  next();
};

module.exports.redirectURL = (req, res, next) => {
  if (req.session.redirectURL) {
    res.locals.redirectURL = req.session.redirectURL;
  }
  next();
};

module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  console.log(listing.owner._id, res.locals.currUser._id);

  if (!listing.owner._id.equals(res.locals.currUser._id)) {
    req.flash("error", "You're not the owner of this listing");
    return res.redirect(`/listings/${id}`);
  }
  next();
};

module.exports.ValidateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(", ");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

module.exports.validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(", ");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};


module.exports.isReviewAuthor =async (req,res,next)=>{
  let{id,rid}=req.params;
  let review = await Review.findById(rid);
  console.log(review);
  if(!res.locals.currUser._id.equals(review.author._id)){
    req.flash("error","You're Not the author of this review");
    return res.redirect(`/listings/${id}`);
  }
  next();
}