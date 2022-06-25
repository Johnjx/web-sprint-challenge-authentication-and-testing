const db = require("../../data/dbConfig");

function findBy(filter) {
  return db("users").where(filter).first();
}

module.exports = {
    findBy,
}
