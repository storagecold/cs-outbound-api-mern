const express = require("express");
const app = express();
const constants = require("./src/utils/constants");
const amadRouter = require("./src/routes/amadRouter");
const coldInfoRouter = require("./src/routes/coldInfoRouter");
const port = constants.PORT;

app.listen(port, () => {
  console.log(`app is listing at http://localhost:${port}`);
});

app.use("/amad", amadRouter);
app.use("/coldInfo", coldInfoRouter);
