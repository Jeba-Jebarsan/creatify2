const { createConnection } = require('@neondatabase/serverless');

module.exports = {
    client: 'pg',
    connection: createConnection({
        host: 'ep-tiny-sea-a58cs5xd-pooler.us-east-2.aws.neon.tech',
        user: 'neondb_owner',
        password: '9wVQChHkrS5l',
        database: 'Writ',
        port: 5432,
        ssl: { rejectUnauthorized: false } // SSL mode to require connections
    }),
    migrations: {
        directory: './drizzle/migrations'
    }
};