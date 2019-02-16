const express = require("express");
const router = express.Router();

// @route   GET api/teams/test
// @desc    Tests teams route
// @access  PUBLIC
router.get("/test", (req, res) => res.json({ msg: "Teams works!" }));

module.exports = router;
