import pg from 'pg'; const { Pool } = pg


const pool = new Pool({
    user: 'root',
    host: 'localhost',
    database: 'users',
    password: 'qwerty',
    port: 55002,
})


export default pool
