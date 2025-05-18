import { betterAuth } from "better-auth";
import { Pool } from "pg";

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
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!
        },
        linkedin: {
            clientId: process.env.LINKEDIN_CLIENT_ID!,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET!
        },
        gitlab: {
            clientId: process.env.GITLAB_CLIENT_ID!,
            clientSecret: process.env.GITLAB_CLIENT_SECRET!
        },
        discord: {
            clientId: process.env.DISCORD_CLIENT_ID!,
            clientSecret: process.env.DISCORD_CLIENT_SECRET!
        },
        facebook: {
            clientId: process.env.FACEBOOK_CLIENT_ID!,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET!
        },
        dropbox: {
            clientId: process.env.DROPBOX_CLIENT_ID!,
            clientSecret: process.env.DROPBOX_CLIENT_SECRET!
        },
        apple: {
            clientId: process.env.APPLE_CLIENT_ID!,
            clientSecret: process.env.APPLE_CLIENT_SECRET!
        },
        microsoft: {
            clientId: process.env.MICROSOFT_CLIENT_ID!,
            clientSecret: process.env.MICROSOFT_CLIENT_SECRET!
        },
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        },
        twitch: {
            clientId: process.env.TWITCH_CLIENT_ID!,
            clientSecret: process.env.TWITCH_CLIENT_SECRET!
        },
        spotify: {
            clientId: process.env.SPOTIFY_CLIENT_ID!,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET!
        },
        tiktok: {
            clientId: process.env.TIKTOK_CLIENT_ID!,
            clientSecret: process.env.TIKTOK_CLIENT_SECRET!
        },
        twitter: {
            clientId: process.env.TWITTER_CLIENT_ID!,
            clientSecret: process.env.TWITTER_CLIENT_SECRET!
        },
        roblox: {
            clientId: process.env.ROBLOX_CLIENT_ID!,
            clientSecret: process.env.ROBLOX_CLIENT_SECRET!
        },
        vk: {
            clientId: process.env.VK_CLIENT_ID!,
            clientSecret: process.env.VK_CLIENT_SECRET!
        },
        zoom: {
            clientId: process.env.ZOOM_CLIENT_ID!,
            clientSecret: process.env.ZOOM_CLIENT_SECRET!
        }
    },
    plugins: [
        // passkey(),

    ]
    /** if no database is provided, the user data will be stored in memory.
     * Make sure to provide a database to persist user data **/
});