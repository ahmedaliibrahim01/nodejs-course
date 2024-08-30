const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/users","index.html"));
});

router.get("/blogs/:blogid", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/users","blog-details.html"));
});

router.get("/blogs", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/users","blogs.html"));
});

module.exports = router;