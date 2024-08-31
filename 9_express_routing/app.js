const express = require("express");
const app = express();
const userRouters = require("./routes/user")

app.use(userRouters)

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
