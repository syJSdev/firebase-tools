"use strict";

module.exports = {
  prepare: require("./prepare"),
  release: require("./release"),
  deploy: require("./deploy").default,
};
