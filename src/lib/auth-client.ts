import { createAuthClient } from "better-auth/react"
import { passkeyClient } from "better-auth/client/plugins";

// export const authClient = createAuthClient({
//     /** The base URL of the server (optional if you're using the same domain) */
//     baseURL: "http://localhost:3000"
// }) 

export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_APP_URL,
    plugins: [passkeyClient(), ],
})

export const {
    signIn,
    signOut,
    signUp,
    useSession
} = authClient;