const path = require("path")
const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./books");


// Book routes
router.use("/books", bookRoutes);

//Google routes
router.use("/google", googleRoutes);

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
