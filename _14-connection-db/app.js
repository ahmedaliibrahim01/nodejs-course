const express = require("express");
const mysql = require("mysql2");
const config = require("./config");

const app = express();
app.set("view engine", "ejs");

const connection = mysql.createConnection(config.db);
connection.connect((err) => {
  if (err) {
    console.log("Connection failed");
    return;
  }
  console.log("Connection successful");

  connection.query("select * from blog", (err, result)=>{
    console.log(result)
  });
});

const path = require("path");
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");

app.use("/libs", express.static(path.join(__dirname, "node_modules")));
app.use("/static", express.static(path.join(__dirname, "public")));

app.use(userRoutes);

app.listen(3000, function () {
  console.log("listening on port 3000");
});
