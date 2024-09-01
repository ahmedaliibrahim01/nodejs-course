const express = require("express");
const router = express.Router();

const data = {
    title: "Home",
    categories: ["Web Geliştirme", "Mobil Uygulamalar","Veri Analizi", "Programlama"]
}

router.use("/blogs/:blogid", function(req, res) {
    res.render("users/blog-details")
});

router.use("/blogs", function(req, res) {
    res.render("users/blogs")
});

router.use("/", function(req, res) {
    res.render("users/index", data)
});

module.exports = router;