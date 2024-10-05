import { neon } from '@neondatabase/serverless';  // Importing the Neon database client
import { drizzle } from 'drizzle-orm/neon-http';  // Importing the Drizzle ORM for Neon
import * as schema from './schema';                // Importing the schema

// Create the database connection
const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL!); 
export const db = drizzle(sql, { schema }); 
