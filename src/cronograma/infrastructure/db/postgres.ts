import { Pool } from 'pg';

const pool = new Pool ({
    max: 20,
    //connectionString: 'postgres://root:newPassword@localhost:port/dbname',
    // connectionString: 'postgres://postgres:newPassword@postgres:5432/todo-db',
    user:'epalomino',
    password:'4cc3s03p4L0M1n0',
    host: '192.168.9.250',
    database:'prueba',
    port: 5432,
    idleTimeoutMillis: 30000
});

export default pool;