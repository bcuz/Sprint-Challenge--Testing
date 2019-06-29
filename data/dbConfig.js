const knex = require('knex');
const config = require('../knexfile.js');

// test or production or dev
const environment = process.env.DB_ENV || process.env.NODE_ENV || 'development';

module.exports = knex(config[environment]);
