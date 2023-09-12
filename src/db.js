const {createPool} = require("mysql2/promise");
const { DB_PORT, DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = require("./config.js")

export const pool = createPool({
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME
})