import {Pool} from 'pg';

export const pool = new Pool({
    user: 'postgres',
    password:'claudio123',
    host: 'localhost',
    database: 'firstapi',
    port: 5432
});


