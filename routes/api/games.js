const express = require("express");
const router = express.Router();

// @route   GET api/games/test
// @desc    Tests games route
// @access  PUBLIC
router.get("/test", (req, res) => res.json({ msg: "Games works!" }));

module.exports = router;
