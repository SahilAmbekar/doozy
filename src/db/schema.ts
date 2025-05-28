import { sql } from "drizzle-orm";
import { uuid, text, pgTable, timestamp } from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
    id: uuid("id").primaryKey().notNull().default(sql`gen_random_uuid()`),
    title: text("title").notNull(),
    description: text("description").notNull(),
    status: text("status").notNull().default("open"), // Default status is 'open'
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
})
