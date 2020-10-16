const pg = require('pg');

const Pool = pg.Pool;
//initialize PG pool 
const pool = new Pool({
    database: 'listToDo',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
})
// return successful connect
pool.on('connect', () => {
    console.log('PostgreSQL Connected');
})
// return errors from pool connection
pool.on('error', (error) => {
    console.log('error with PostgresSQL', error);
})

module.exports = pool;