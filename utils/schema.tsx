import { boolean, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

// Define the AIOutput table
export const AIOutput = pgTable('aiOutput', {
    id: serial('id').primaryKey(),  // Primary key
    formData: varchar('formData'),   // Stores form data
    airesponse: text('airesponse'),   // Stores AI response
    templateSlug: varchar('templateSlug').notNull(),  // Must not be null
    createdBy: varchar('createdBy'),  // Email of the user who created the entry
    createdAt: varchar('createdAt'),    // Timestamp of when the entry was created
    userFeedback: text('userFeedback')  // Stores user feedback on the AI response
});

// Define the UserSubscription table
export const UserSubscription = pgTable('UserSubscription', {
    id: serial('id').primaryKey(),    // Primary key
    email: varchar('email'),           // User's email
    userName: varchar('userName'),     // User's name
    active: boolean('active'),         // Subscription active status
    paymentId: varchar('paymentId'),   // Payment ID associated with the subscription
    joinDate: varchar('joinDate')      // Date of subscription
});
