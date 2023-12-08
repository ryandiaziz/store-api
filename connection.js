import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'admin',
    database: 'store'
})

export default client