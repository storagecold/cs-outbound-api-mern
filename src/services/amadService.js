const config = require("./../config/config");
const Amad = require("./../model/amad");
const constants = require("./../utils/constants");
const logger = config.logger;
const mongoose = require("mongoose");
mongoose.connect(config.DB_URL);

async function getAmads(query, page, limit) {
  const amadQuery = buildQuery(query);
  return getResults(amadQuery, page, limit);
}

async function getAmadByAmadNo(amadNo) {
  let amad;
  try {
    amad = await Amad.where(constants.AMAD_NO).equals(amadNo);
  } catch (e) {
    logger.error(e.message);
  }
  return amad;
}

async function getAmadByParty(party, page, limit) {
  const query = {
    party: party,
  };
  return getResults(query, page, limit);
}

async function getAmadByVillage(village, page, limit) {
  const query = {
    village: village,
  };
  return getResults(query, page, limit);
}

async function getAmadByYear(year, page, limit) {
  const query = {
    year: year,
  };
  return getResults(query, page, limit);
}

async function getAmadByColdId(coldId, page, limit) {
  const query = {
    coldId: coldId,
  };
  return getResults(query, page, limit);
}

async function getResults(query, page, limit) {
  let results = {};
  try {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    if (endIndex < (await Amad.countDocuments(query).exec())) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    results.amadResults = await Amad.find(query)
      .limit(limit)
      .skip(startIndex)
      .exec();
  } catch (e) {
    logger.error(e.message);
  }
  return results;
}

function buildQuery(query) {
  const amadQuery = {};
  if (query.coldId !== undefined) {
    amadQuery.coldId = query.coldId;
  }
  if (query.amadNo !== undefined) {
    amadQuery.amadNo = query.amadNo;
  }
  if (query.party !== undefined) {
    amadQuery.party = query.party;
  }
  if (query.village !== undefined) {
    amadQuery.village = query.village;
  }
  if (query.year !== undefined) {
    amadQuery.year = query.year;
  }

  return amadQuery;
}

module.exports = {
  getAmads,
  getAmadByAmadNo,
  getAmadByParty,
  getAmadByVillage,
  getAmadByYear,
  getAmadByColdId,
};
