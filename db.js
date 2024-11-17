import mysql from 'mysql2/promise';

const db = await mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'pw',
    database: 'product_db',
    port: 3306
});

console.log('Connected to MySQL');

export default db;
