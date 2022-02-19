const express = require("express");
const app = express();
const amadController = require("./src/controller/amadController");
const constants = require("./src/utils/constants");
const amadRouter = require("./src/routes/amadRouter");
const coldInfoRouter = require("./src/routes/coldInfoRouter");
const port = constants.PORT;
const validation = require("./src/utils/validation");

app.use(validation.validateAmadQueryParams);

app.listen(port, () => {
  console.log(`app is listing at http://localhost:${port}`);
});

app.use("/cs/outbound/api/amads", amadController);
app.use("/coldInfo",amadRouter );
