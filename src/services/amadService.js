const config = require("./../config/config");
const Amad = require("./../model/amad");
const constants = require("./../utils/constants");
const logger = config.logger;
const mongoose = require("mongoose");
mongoose.connect(config.DB_URL);

async function getAmads() {
  let amad;
  try {
    amad = await Amad.find({});
    //logger.info(amad);
  } catch (e) {
    logger.error(e.message);
  }
  return amad;
}

async function getAmadByAmadNo(amadNo) {
  let amad;
  try {
    amad = await Amad.where(constants.AMAD_NO).equals(amadNo);
    logger.info(amad);
  } catch (e) {
    logger.error(e.message);
  }
  return amad;
}

async function getAmadByPartyName(partyName) {
  let amad;
  try {
    amad = await Amad.where(constants.PARTY).equals(partyName);
    logger.info(amad);
  } catch (e) {
    logger.error(e.message);
  }
  return amad;
}

async function getAmadByVillageName(villageName) {
  let amads;
  try {
    amads = await Amad.where(constants.VILLAGE).equals(villageName);
    logger.info(amads);
  } catch (e) {
    logger.error(e.message);
  }
  return amads;
}

async function getAmadByYear(year) {
  let amads;
  try {
    amads = await Amad.where(constants.YEAR).equals(year);
  } catch (e) {
    logger.error(e.message);
  }
  return amads;
}

async function getAmadByColdId(coldId) {
  let amads;
  try {
    amads = await Amad.where(constants.COLD_ID).equals(coldId);
  } catch (e) {
    logger.error(e.message);
  }
  return amads;
}

module.exports = {
  getAmads,
  getAmadByAmadNo,
  getAmadByPartyName,
  getAmadByVillageName,
  getAmadByYear,
  getAmadByColdId,
};