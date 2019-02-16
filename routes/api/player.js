const express = require("express");
const router = express.Router();

// @route   GET api/player/test
// @desc    Tests player route
// @access  PUBLIC
router.get("/test", (req, res) => res.json({ msg: "Player works!" }));

module.exports = router;
