const express = require("express");
const mongoose = require("mongoose");
const config = require("./../config/config");
const amadService = require("./../services/amadService");
const logger = config.logger;
mongoose.connect(config.DB_URL, () => console.log("connected to DB"));

const amadController = express.Router();

//getAllAmad
amadController.get("/", async (req, res) => {
  try {
    const amads = await amadService.getAmads();
    if (amads.length > 0) {
      res.status(200).send(amads);
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
amadController.get("/amadNo/:amadNo", async (req, res) => {
  try {
    const amadNo = req.params.amadNo;
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
amadController.get("/party/:party", async (req, res) => {
  try {
    const partyName = req.params.party;
    const amad = await amadService.getAmadByPartyName(partyName);
    if (amad.length > 0) {
      res.status(200).send(amad);
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
amadController.get("/village/:village", async (req, res) => {
  try {
    const villageName = req.params.village;
    const amads = await amadService.getAmadByVillageName(villageName);
    if (amads.length > 0) {
      res.status(200).send(amads);
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
amadController.get("/year/:year", async (req, res) => {
  try {
    const year = req.params.year;
    const amads = await amadService.getAmadByYear(year);
    if (amads.length > 0) {
      res.status(200).send(amads);
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
amadController.get("/coldId/:coldId", async (req, res) => {
  try {
    const coldId = req.params.coldId;
    const amads = await amadService.getAmadByColdId(coldId);
    if (amads.length > 0) {
      res.status(200).send(amads);
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
