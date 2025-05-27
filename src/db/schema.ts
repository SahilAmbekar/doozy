import { sql } from "drizzle-orm";
import { uuid, integer, text, varchar, boolean, pgTable, timestamp } from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
    id: uuid("id").primaryKey().notNull().default(sql`gen_random_uuid()`),
    title: text("title").notNull(),
    description: text("description").notNull(),
    completed: boolean("completed").default(false),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
})
