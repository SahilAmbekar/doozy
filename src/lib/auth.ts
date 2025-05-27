import { betterAuth } from "better-auth";
import { Pool } from "pg";

debugger;
export const auth = betterAuth({
    // Database connection
    database: new Pool({
        connectionString: process.env.CONNECTION_STRING,
    }),

    emailAndPassword: {
        enabled: true,
        async sendResetPassword(data, request) {
            // Send an email to the user with a link to reset their password
        },
    },
    plugins: [
        // passkey(),

    ]
    /** if no database is provided, the user data will be stored in memory.
     * Make sure to provide a database to persist user data **/
});