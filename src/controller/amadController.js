const express = require("express");
const mongoose = require("mongoose");
const config = require("./../config/config");
const amadService = require("./../services/amadService");
const logger = config.logger;
mongoose.connect(config.DB_URL);

const amadController = express.Router();

//getAllAmad
amadController.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const results = await amadService.getAmads(req.query, page, limit);
    if (results.amadResults.length > 0) {
      res.status(200).send(results);
    } else {
      res.status(404).send("No Record found");
    }
  } catch (error) {
    res.status(500).send({
      error: "Internal Server Error",
    });
  }
});

//getAmad
amadController.get("/amadNo", async (req, res) => {
  try {
    const amadNo = parseInt(req.query.amadNo);
    const amad = await amadService.getAmadByAmadNo(amadNo);
    if (amad.length > 0) {
      res.status(200).send(amad);
    } else {
      res.status(404).send(`No Record found for amadNo: ${amadNo}`);
    }
  } catch (error) {
    res.status(500).send({
      error: "Internal Server Error",
    });
  }
});

//getAmad by Party Name
amadController.get("/party", async (req, res) => {
  try {
    const party = req.query.party;
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const results = await amadService.getAmadByParty(party, page, limit);
    if (results.amadResults.length > 0) {
      res.status(200).send(results);
    } else {
      res.status(404).send(`No Record found for party: ${partyName}`);
    }
  } catch (error) {
    res.status(500).send({
      error: "Internal Server Error",
    });
  }
});

//getAmad by village Name
amadController.get("/village", async (req, res) => {
  try {
    const village = req.query.village;
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const results = await amadService.getAmadByVillage(village, page, limit);
    if (results.amadResults.length > 0) {
      res.status(200).send(results);
    } else {
      res.status(404).send(`No Record found for village: ${villageName}`);
    }
  } catch (error) {
    res.status(500).send({
      error: "Internal Server Error",
    });
  }
});

//getAmad by year
amadController.get("/year", async (req, res) => {
  try {
    const year = req.query.year;
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const results = await amadService.getAmadByYear(year, page, limit);
    if (results.amadResults.length > 0) {
      res.status(200).send(results);
    } else {
      res.status(404).send(`No Record found for year: ${year}`);
    }
  } catch (error) {
    res.status(500).send({
      error: "Internal Server Error",
    });
  }
});

//getAmad by coldId
amadController.get("/coldId", async (req, res) => {
  try {
    const coldId = req.query.coldId;
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const results = await amadService.getAmadByColdId(coldId, page, limit);
    if (results.amadResults.length > 0) {
      res.status(200).send(results);
    } else {
      res.status(404).send(`No Record found for coldId: ${coldId}`);
    }
  } catch (error) {
    res.status(500).send({
      error: "Internal Server Error",
    });
  }
});

module.exports = amadController;
