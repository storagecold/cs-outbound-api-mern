const express = require("express");
const amadRouter = express.Router();
const MongoClient = require("mongodb").MongoClient;
const constants = require("./../utils/constants");

// middleware that is specific to this router
amadRouter.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

amadRouter.get("/getAmad", function (req, res) {
  MongoClient.connect(constants.URL_CS_LOCAL, (err, db) => {
    if (err) throw err;
    const dbo = db.db("CS_DEV");
    dbo
      .collection("amad")
      .find({})
      .toArray((err, result) => {
        if (err) throw err;
        res.send(result);
        db.close();
      });
  });
});

module.exports = amadRouter;
