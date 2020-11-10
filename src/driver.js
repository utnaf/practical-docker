const neo4j = require("neo4j-driver");

const neo4jHost = process.env.NEO4J_HOST || "locahost";
const neo4jUsername = process.env.NEO4J_USERNAME || "neo4j";
const neo4jPassword = process.env.NEO4J_PASSWORD || "";

const driver = neo4j.driver(
  `bolt://${neo4jHost}`,
  neo4j.auth.basic(neo4jUsername, neo4jPassword)
);

module.exports = driver;
