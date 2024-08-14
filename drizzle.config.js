/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:9wVQChHkrS5l@ep-tiny-sea-a58cs5xd-pooler.us-east-2.aws.neon.tech/Writ?sslmode=require'
    }
};