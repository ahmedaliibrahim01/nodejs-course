const express = require("express");
const router = express.Router();

const data = {
  title: "Home",
  categories: [
    "Web Geliştirme",
    "Mobil Uygulamalar",
    "Veri Analizi",
    "Programlama",
  ],
  blogs: [
    {
      blogid: 1,
      image: "1.jpeg",
      title: "Komple Uygulamalı Web Geliştirme",
      description:
        "Sıfırdan ileri seviyeye 'Web Geliştirme': Html, Css, Sass, Flexbox, Bootstrap, Javascript, Angular, JQuery, Asp.Net Mvc",
      homePage: false
    },
    {
      blogid: 2,
      image: "2.jpeg",
      title: "Python ile Sıfırdan İleri Seviye Python Programla",
      description:
        "Sıfırdan İleri Seviye Python Dersleri.Veritabanı,Veri Analizi,Bot Yazımı,Web Geliştirme(Django)",
      homePage: true
    },
    {
      blogid: 3,
      image: "3.jpeg",
      title:
        "Python Sıfırdan İleri Seviye Modern Javascript Dersleri ES7+ Sıfırdan İleri Seviye Python Programla",
      description:
        "Sıfırdan Modern javascript dersleri ile (ES6 & ES7+) Nodejs, Angular, React ve VueJs için sağlam bir temel oluşturun.eri Seviye Python Dersleri.Veritabanı,Veri Analizi,Bot Yazımı,Web Geliştirme(Django)",
      homePage: true
    },
  ],
};

router.use("/blogs/:blogid", function (req, res) {
  res.render("users/blog-details");
});

router.use("/blogs", function (req, res) {
  res.render("users/blogs", data);
});

router.use("/", function (req, res) {
  res.render("users/index", data);
});

module.exports = router;
