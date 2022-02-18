const config = require("./../config/config");
const Amad = require("./../model/amad");
const logger = config.logger;
const mongoose = require("mongoose");
mongoose.connect(config.DB_URL);

async function getAllAmad() {
    let amad;
    try {
         amad = await Amad.where("party").equals("KULDEEP S/O JAGANNATHA").limit(1);
        console.log(amad);
    } catch (e) {
        console.error(e.message);
    }
    return amad;
}
module.exports = {getAllAmad};