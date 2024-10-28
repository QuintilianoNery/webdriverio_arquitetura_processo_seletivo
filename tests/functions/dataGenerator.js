const { loadElements, loadFixtures } = require("./loadFunctions.js");
const { config } = require("../../config/wdio.shared.conf.js")
const { faker } = require ("@faker-js/faker");

// Global variables
const element = loadElements()
const fixture = loadFixtures()
const application = 'ebac'