const express = require("express");

const app = express();

const path = require("path");
const userRouter = require("./routers/7_express_router.js");

app.use("/libs", express.static(path.join(__dirname, "../node_modules")));
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(userRouter);

app.listen(3000, function () {
  console.log("listening on port 3000");
}); 
