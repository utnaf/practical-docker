const neo4j = require("neo4j-driver");

const driver = neo4j.driver(
  "bolt://localhost",
  neo4j.auth.basic("neo4j", "password")
);

module.exports = driver;
