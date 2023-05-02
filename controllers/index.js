const router = require("express").Router();

// This is where we handle HomeRoutes (handlebars are handled by the HomeRoutes)

router.use("/api", require("./api/ApiRoutes"));

module.exports = router;