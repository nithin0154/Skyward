const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const reviewController = require("../controllers/reviews.js");
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");

router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.newReviewCreation)
);

router.delete(
  "/:rid",
  isLoggedIn,
  isReviewAuthor,
  reviewController.destroyReview
);

module.exports = router;
