const router = require("express").Router({ mergeParams: true });
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const theatersRouter = require("../theaters/theaters.router");
const reviewsRouter = require("../reviews/reviews.router");

router.use("/:movieId/theaters", controller.movieExists, theatersRouter);

router.use("/:movieId/reviews", controller.movieExists, reviewsRouter);

router.route("/:movieId([0-9]+)")
  .get(controller.read)
  .all(methodNotAllowed);

router
  .route("/movies?is_showing=true")
  .get(controller.list)
  .all(methodNotAllowed);

router.route("/")
  .get(controller.list)
  .all(methodNotAllowed);

module.exports = router;
