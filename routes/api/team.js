const express = require("express");
const router = express.Router();

// @route   GET api/team/test
// @desc    Tests team route
// @access  PUBLIC
router.get("/test", (req, res) => res.json({ msg: "Team works!" }));

module.exports = router;
