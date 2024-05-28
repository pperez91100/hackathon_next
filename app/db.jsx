import { Pool } from 'pg';

const pool = new Pool({
    user: 'perez',
    host: 'postgresql-perez.alwaysdata.net',
    database: 'perez_vercel_db',
    password: 'jo2024!',
    port: 5432,            
});

export default pool;
