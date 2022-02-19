const constants = require("./constants");
const config = require("./../config/config");
const logger = config.logger;
const validAmadQueryParams = [
  constants.COLD_ID,
  constants.AMAD_NO,
  constants.PARTY,
  constants.VILLAGE,
  constants.YEAR,
  constants.PAGE,
  constants.LIMIT,
];
function validateAmadQueryParams(req, res, next) {
  const query = req.query;
  for (const key in query) {
    const value = query[key];
    if (key === undefined || value === undefined) {
      const error = "invalid query param";
      logger.error(error);
      res.status(500).send(error);
      return;
    }

    if (validAmadQueryParams.indexOf(key) === -1) {
      const error = `invalid query param: ${key}`;
      logger.error(error);
      res.status(500).send(error);
      return;
    }

    if (key === constants.COLD_ID && value.length < 8) {
      const error = `Invalid value: ${value} for ${constants.COLD_ID}`;
      logger.error(error);
      res.status(500).send(error);
      return;
    }

    if (
      key === constants.AMAD_NO &&
      (isNaN(parseFloat(value)) || !isFinite(value))
    ) {
      const error = `Invalid value: ${value} for ${constants.AMAD_NO}`;
      logger.error(error);
      res.status(500).send(error);
      return;
    }

    if (key === constants.PARTY && value.length < 3) {
      const error = `Invalid value: ${value} for ${constants.PARTY}`;
      logger.error(error);
      res.status(500).send(error);
      return;
    }

    if (key === constants.VILLAGE && value.length < 3) {
      const error = `Invalid value: ${value} for ${constants.VILLAGE}`;
      logger.error(error);
      res.status(500).send(error);
      return;
    }
    if (
      key === constants.YEAR &&
      (isNaN(parseFloat(value)) ||
        !isFinite(value) ||
        value.length < 4 ||
        value <= 1970)
    ) {
      const error = `Invalid value: ${value} for ${constants.YEAR}`;
      logger.error(error);
      res.status(500).send(error);
      return;
    }
  }

  next();
}

module.exports = { validateAmadQueryParams };
