const { createLogger, format, transports } = require("winston");

const logger = createLogger({
  format: format.combine(format.timestamp(), format.json()),
  transports: [new transports.Console({})],
});

require("dotenv").config();
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

module.exports ={PORT,DB_URL,logger};
