const express = require("express");
const router = express.Router();

// @route   GET api/game/test
// @desc    Tests game route
// @access  PUBLIC
router.get("/test", (req, res) => res.json({ msg: "Game works!" }));

module.exports = router;
