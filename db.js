// configures how we connect to db
const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'amandasierralopez',
//   password: 'LatinaWhoCodes555!', 
  host: 'localhost',
  port: 5432,
  database: 'perntodo'
});

module.exports = pool;