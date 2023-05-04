const router = require("express").Router();

// This is where we handle HomeRoutes (handlebars are handled by the HomeRoutes)

router.use("/user", require("./api/UserRoutes"));

router.use("/", require("./HomeRoutes"));

module.exports = router;