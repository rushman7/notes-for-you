// Import Knex dependency and assign it to a shorthand variable
const knex = require('knex');
const knexConfig = require('./knexfile');

// Define the environment to be dynamic
const dbEnv = process.env.DB_ENV || 'development';

//Export
module.exports = knex(knexConfig[dbEnv]);;