const pg = require('pg');

const Pool = pg.Pool;
const pool = new Pool({
    database: 'listToDo',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
})

pool.on('connect', () => {
    console.log('PostgreSQL Connected');
})

pool.on('error', (error) => {
    console.log('error with PostgresSQL', error);
})

module.exports = pool;