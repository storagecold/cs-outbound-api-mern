const express = require("express");
const coldInfoRouter = express.Router();
const MongoClient = require("mongodb").MongoClient;
const constants = require("./../utils/constants");
const options = { upsert: true };

coldInfoRouter.get("/getColdInfo", function (req, res) {
  MongoClient.connect(constants.URL_CS_LOCAL, (err, db) => {
    if (err) throw err;
    const dbo = db.db(constants.CS_DEV);
    dbo
      .collection(constants.COLD_INFO)
      .find({})
      .toArray((err, result) => {
        if (err) throw err;
        res.send(result);
        db.close();
      });
  });
});

coldInfoRouter.put("/addColdInfo", function (req, res) {
  let query = {
    submitterId: req.body.submitterId,
  };

  MongoClient.connect(constants.URL_CS_LOCAL, (err, db) => {
    if (err) throw err;
    const dbo = db.db(constants.CS_DEV);
    dbo.collection(constants.COLD_INFO).replaceOne(query, req.body, options);
  });
});

module.exports = coldInfoRouter;
