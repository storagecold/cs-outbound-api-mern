const express = require("express");
const mongoose = require("mongoose");
const config = require("./../config/config");
const amadService = require("./../services/amadService");
mongoose.connect(config.DB_URL, () => console.log("connected to DB"));

const amadController = express.Router();
//const amadService = require("./../services/amadService");

amadController.get("/getAllAmad", (req, res) => {
     const amad = amadService.getAllAmad();
    console.log("before send....");
    res.send(amad);
});

module.exports = amadController;