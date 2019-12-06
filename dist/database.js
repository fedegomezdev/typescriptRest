"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: 'postgres',
    password: 'claudio123',
    host: 'localhost',
    database: 'firstapi',
    port: 5432
});
